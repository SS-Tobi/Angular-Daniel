import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router, RouteConfigLoadStart, ResolveStart, RouteConfigLoadEnd, ResolveEnd } from '@angular/router';
import {LocalStoreService} from '../../../shared/services/local-store.service';
import {ToastrService} from 'ngx-toastr';
import {NavigationService} from "../../../shared/services/navigation.service";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
    animations: [SharedAnimations]
})
export class SigninComponent implements OnInit {
    loading: boolean;
    loadingText: string;
    signinForm: FormGroup;
    authError: boolean = false;
    constructor(
        private fb: FormBuilder,
        private auth: AuthService,
        private router: Router,
        private store: LocalStoreService,
        private message: ToastrService,
        private navigationService: NavigationService,
    ) { }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
                this.loadingText = 'Loading...';

                this.loading = true;
            }
            if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
                this.loading = false;
            }
        });

        this.signinForm = this.fb.group({
            email: ['', [Validators.required,Validators.email]],
            password: ['', Validators.required]
        });
    }

    signin() {
        this.loading = true;
        this.loadingText = 'Signing in...';
        this.auth.signin(this.signinForm.value)
            .subscribe((response:{success: string, token: string, on_boarding: string}) => {
                this.loading = false;
                console.log(response);

                if (response.success) {
                    this.authError = false;
                    const token = response.token;
                    this.store.setItem('auth_token', token);
                    this.store.setItem('login_status', true);
                    this.auth.authenticated = true;
                    this.auth.checkAuth();
                    this.store.setItem('demo_login_status', true);

                    this.navigationService.refreshMenu();

                    if(this.auth.user.role=="admin"){
                        this.router.navigate(['/admin/dashboard']);
                    }else if(this.auth.user.role=="staff"){
                        this.router.navigate(['/staff/dashboard']);
                    }else{
                        if(response.on_boarding=='pending'){
                            this.router.navigate(['/onboarding/basic-info']);
                        }else {
                            this.router.navigate(['/dashboard/overview']);
                        }
                    }
                }

            }, (err) => {
                this.auth.authenticated = false;
                this.store.setItem('demo_login_status', false);
                this.loading = false;
                this.authError=true;
                // this.message.error('Something bad has happened. Try again later','Request failed')
            });
    }

}

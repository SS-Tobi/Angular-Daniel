import {Component, OnInit, Output} from '@angular/core';
import {SharedAnimations} from 'src/app/shared/animations/shared-animations';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth.service';
import {IUser} from '../../../shared/models/IUser';
import {ResolveEnd, ResolveStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [SharedAnimations]
})
export class SignupComponent implements OnInit {
    loading: boolean;
    loadingText: string;

    signupForm: FormGroup;


    constructor(
        private fb: FormBuilder,
        private auth: AuthService,
        private router: Router,
        private message: ToastrService
    ) {
    }

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

        this.signupForm = this.fb.group({
            full_name: ['', [Validators.required,
                Validators.minLength(5)]
            ],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            confirm_password: ['', [Validators.required, Validators.minLength(8)]]
        });
    }


    doSignup() {

        if (this.signupForm.invalid) {
            return;
        }


        const form_data = this.signupForm.value;
        if (form_data.password !=
            form_data.confirm_password) {
            this.signupForm.controls.confirm_password.setErrors({match: true});
            return;
        }


        this.loading = true;
        this.loadingText = 'Signing up...';

        const user: IUser = {
            full_name: form_data.full_name,
            email: form_data.email,
            password: form_data.password,
            on_boarding: 'pending',
        };

        const component = this;
        this.auth.signup(user).subscribe((
            response: { status: string, errors?: object, id?: string }
        ) => {

            this.loading = false;
            if (response.status == "success") {
                this.message.success('You can now login.', 'Welcome aboard :)');
                // successful sign up
                this.router.navigate(['/sessions/signin']);
            } else {
                const errors = response.errors;
                if (errors) {
                    Object.keys(errors).map(function (key, index) {

                        const kind = errors[key].kind;
                        const message = errors[key].message;
                        const errorObject = {};
                        errorObject[kind] = message;
                        component.signupForm.controls[key].setErrors(
                            errorObject
                        );
                    });
                } else {
                    this.message.error('Something bad happened.', 'Oops!');
                }
            }
        }, (err) => {


            this.loading = false;


        });

    }

}

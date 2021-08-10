import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {LocalStoreService} from "../../../shared/services/local-store.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../shared/services/auth.service";

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

    resetPasswordForm: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: AuthService,
        private toaster: ToastrService,
        private storage: LocalStoreService,
        private fb: FormBuilder,
        private toastr: ToastrService,
    ) {
    }

    code = '';
    loadingText: string;
    loading: boolean;

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.code = params.code;
        });

        this.resetPasswordForm = this.fb.group({
            password: ['', [Validators.required, Validators.minLength(8)]],
            confirm_password: ['', [Validators.required, Validators.minLength(8)]]
        });

    }

    get f() { return this.resetPasswordForm; }


    resetPassword() {
        if (this.resetPasswordForm.invalid) {
            return;
        }

        const form_data = this.resetPasswordForm.value;
        if (form_data.password !=
            form_data.confirm_password) {
            this.resetPasswordForm.controls.confirm_password.setErrors({match: true});
            return;
        }

        this.loading = true;
        this.loadingText = 'Submitting...';

        const fields = {
            new_password: form_data.password,
            code: this.code,
        };

        const component = this;

        this.service.resetPassword(fields).subscribe(
        response => {
                this.loading = false;
                this.toastr.success('Password has been reset successfully. You can login now.','Yippy!');
                this.resetPasswordForm.reset();
                this.router.navigateByUrl('/sessions/signin')
            }, (err) => {
                this.loading = false;
                this.toastr.error(err,'Oh!');
            }
        );

    }
}

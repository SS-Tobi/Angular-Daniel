import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from "ngx-toastr";
import {AuthService} from '../../../shared/services/auth.service';
import {UserService} from '../../../shared/services/user.service';
import {LocalStoreService} from '../../../shared/services/local-store.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  changePasswordForm: FormGroup;
  profileForm: FormGroup;
  profileLoading: boolean;
  profileLoadingText:string;

  passwordLoading: boolean;
  passwordLoadingText:string;
  constructor(
      private fb: FormBuilder,
      private toastr: ToastrService,
      public auth:AuthService,
      public userService: UserService,
      private store: LocalStoreService
  ) { }

  ngOnInit() {
    this.buildFormBasic();
    // this.toastr.error("lol",'Another one');
  }

  buildFormBasic() {
    this.profileForm = this.fb.group({
      full_name: [ this.auth.user.name, [Validators.required,Validators.min(5)] ],
      email: [ this.auth.user.email, [Validators.required,Validators.email] ],
      mobile_no: [ this.auth.user.mobile_no, [Validators.required,Validators.pattern('^[0-9-+ ]{5,20}$'),] ],
      zip_code: [ this.auth.user.zip_code, [Validators.required,Validators.pattern('^[a-zA-Z0-9 ]{4,7}$'),] ],
    });

    this.changePasswordForm = this.fb.group({
      old_password: ['',[Validators.required]],
      new_password: ['',[Validators.required,Validators.min(8)]],
      confirm_password: ['',[Validators.required,Validators.min(8)]],
    });
  }


  changePassword(){
    console.log(this.changePasswordForm);
    if(this.changePasswordForm.invalid){
      Object.keys(this.changePasswordForm.controls).map((k,i)=>{
        this.changePasswordForm.controls[k].markAsDirty();
      });
      return;
    }


    const form_data = this.changePasswordForm.value;

    if(form_data.new_password != form_data.confirm_password){
      this.changePasswordForm.controls.new_password.setErrors({match:true});
      this.changePasswordForm.controls.confirm_password.setErrors({match:true});
      return;
    }

    this.passwordLoading = true;
    this.passwordLoadingText = "Updating password";



    this.userService.updatePassword(form_data.old_password,form_data.new_password)
        .subscribe((r)=>{
          this.passwordLoading = false;
          if(r.status=='success') {

            this.toastr.success(
                'The password was updated successfully.',
                'Change successful');
            this.store.setItem('auth_token',r.token);
          }
          else{
            this.changePasswordForm.controls.old_password.setErrors({
              wrong:true
            });
          }

        },(er)=>{
          this.toastr.error('There was an error in updating password','Error in request');
          this.passwordLoading = false;
        })
  }
  updateProfile(){
    if(this.profileForm.invalid){
      this.profileForm.controls.full_name.markAsDirty();
      return;
    }
    this.profileLoading = true;
    this.profileLoadingText = "Updating profile";

    const fieldToSend = {
      name:this.profileForm.value.full_name,
      mobile_no:this.profileForm.value.mobile_no,
      zip_code:this.profileForm.value.zip_code,
      email:this.profileForm.value.email,
    };

    this.userService.updateProfile(fieldToSend)
        .subscribe((res)=>{
          console.log(res);
          this.profileLoading = false;
          this.toastr.success(res.message, 'Request completed');
          this.store.setItem('auth_token',res.token);
          this.auth.checkAuth();
        },(err)=>{
          this.profileLoading = false;
          this.toastr.error('There was an error in updating your profile',
              'Error in request');
        });
  }



}

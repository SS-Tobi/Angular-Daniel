import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../../shared/services/auth.service";
import {UserService} from "../../../shared/services/user.service";
import {LocalStoreService} from "../../../shared/services/local-store.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {


  profileForm: FormGroup;
  profileLoading: boolean;
  profileLoadingText:string;

  constructor(
      private fb: FormBuilder,
      private toastr: ToastrService,
      public auth:AuthService,
      public router:Router,
      public userService: UserService,
      private store: LocalStoreService
  ) { }

  ngOnInit() {
    this.buildFormBasic();
    this.markOnBoardingDone();
  }

  buildFormBasic() {
    this.profileForm = this.fb.group({
      full_name: [ this.auth.user.name, [Validators.required,Validators.min(5)] ],
      mobile_no: [ this.auth.user.mobile_no, [Validators.required,Validators.pattern('^[0-9-+ ]{5,20}$'),] ],
      zip_code: [ this.auth.user.zip_code, [Validators.required,Validators.pattern('^[a-zA-Z0-9 ]{4,7}$'),] ],
    });
  }

  updateProfile(){
    if(this.profileForm.invalid){
      this.profileForm.controls.full_name.markAsDirty();
      this.profileForm.controls.mobile_no.markAsDirty();
      this.profileForm.controls.zip_code.markAsDirty();
      return;
    }
    this.profileLoading = true;
    this.profileLoadingText = "Updating profile";

    const fieldToSend = {
      name:this.profileForm.value.full_name,
      mobile_no:this.profileForm.value.mobile_no,
      zip_code:this.profileForm.value.zip_code,
    };

    this.userService.updateProfile(fieldToSend)
        .subscribe((res)=>{
          console.log(res);
          this.profileLoading = false;
          this.toastr.success(res.message, 'Request completed');
          this.store.setItem('auth_token',res.token);
          this.auth.checkAuth();
          this.router.navigateByUrl('/onboarding/social-media');
        },(err)=>{
          this.profileLoading = false;
          this.toastr.error('There was an error in updating your profile',
              'Error in request');
        });

  }

  private markOnBoardingDone() {
    this.userService.markOnBoardingDone()
        .subscribe((res)=>{
          this.profileLoading = false;
          this.store.setItem('auth_token',res.token);
          this.auth.checkAuth();
        },(err)=>{
          console.log("Failed to mark on boarding completed.")
          console.log(err);
        });
  }
}

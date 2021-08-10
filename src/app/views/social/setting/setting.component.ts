import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute} from '@angular/router';
import {SocialService} from '../../../shared/services/social/social.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  facebookForm: FormGroup;
  instagramForm: FormGroup;
  linkedinForm: FormGroup;
  twitterForm: FormGroup;

  facebookLoading: boolean;
  twitterLoading: boolean;
  instagramLoading: boolean;
  linkedinLoading: boolean;



  loadingText: string = "Saving...";

  profiles:any = [];

  profileData = {};
  facebookValid = false;

  constructor(
      private fb: FormBuilder,
      private toastr: ToastrService,
      private route: ActivatedRoute,
      private factory: SocialService
  ) { }

  ngOnInit() {
    this.profiles = this.route.snapshot.data.profiles;

    if(this.profiles.length > 0){
      this.profiles.forEach((value)=>{
          this.profileData[value.type] = value.profile;
      })
    }

    this.buildForm();
  }

  buildForm() {
    this.facebookForm = this.fb.group({
      profile: [this.profileData['facebook'],Validators.required],
      valid: [this.profileData['facebook']?'1':'-1']
    });
    this.instagramForm = this.fb.group({
      profile: [this.profileData['instagram'],Validators.required],
      valid: [this.profileData['instagram']?'1':'-1']
    });
    this.twitterForm = this.fb.group({
      profile: [this.profileData['twitter'],Validators.required],
      valid: [this.profileData['twitter']?'1':'-1']
    });
    this.linkedinForm = this.fb.group({
      profile: [this.profileData['linkedin'],Validators.required],
      valid: [this.profileData['linkedin']?'1':'-1']
    });
  }

  saveProfile(type: string){
      let form: FormGroup ;

      switch(type){
        case "facebook":
          form = this.facebookForm;
          break;

        case "twitter":
          form = this.twitterForm;
          break;

        case "linkedin":
          form = this.linkedinForm;
          break;

        case "instagram":
          form = this.instagramForm;
          break;
      }
      if(form.invalid){
        form.controls.profile.markAsDirty();
        console.log(form.controls.profile);
        return;
      }

      this.startLoading(type);

      this.factory.addSocialProfile({
        profile: form.value.profile,
        type: type
      }).subscribe((res)=>{
        this.stopLoading(type);
        if(res.status == "success") {
          form.value.valid = "1";
          this.toastr.success("Your profile was updated successfully.", "Yay!");
        }
        else {
          this.toastr.error("There was an error in updating your profile.", "Oops!");
          form.value.valid = "-1";
        }

        /*if(res.exists) {
          form.value.valid = "1";
        }else{
          form.value.valid = "-1";
        }*/



      },(err)=>{
        this.stopLoading(type);
        form.value.valid = "-1";
        this.toastr.error("There was an error in updating your profile.","Oops");
      })

  }

  startLoading(type: string){
    switch(type){
      case "facebook":
        this.facebookLoading = true;
        break;

      case "twitter":
        this.twitterLoading = true;
        break;

      case "linkedin":
        this.linkedinLoading = true;
        break;

      case "instagram":
        this.instagramLoading = true;
        break;
    }
  }

  stopLoading(type: string){
    switch(type){
      case "facebook":
        this.facebookLoading = false;
        break;

      case "twitter":
        this.twitterLoading = false;
        break;

      case "linkedin":
        this.linkedinLoading = false;
        break;

      case "instagram":
        this.instagramLoading = false;
        break;
    }
  }

}

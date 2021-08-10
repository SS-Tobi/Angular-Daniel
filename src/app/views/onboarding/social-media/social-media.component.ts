import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {SocialService} from "../../../shared/services/social/social.service";

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {

  facebookForm: FormGroup;
  instagramForm: FormGroup;
  linkedinForm: FormGroup;
  twitterForm: FormGroup;

  facebookDone: boolean = false;
  twitterDone: boolean = false;
  instagramDone: boolean = false;
  linkedinDone: boolean = false;



  loadingText: string = "Saving...";

  profiles:any = [];

  profileData = {};
  facebookValid = false;
    loading = false;

  constructor(
      private fb: FormBuilder,
      private toastr: ToastrService,
      private route: ActivatedRoute,
      private factory: SocialService,
      private router: Router,
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
      valid: ["0"]
    });
    this.instagramForm = this.fb.group({
      profile: [this.profileData['instagram'],Validators.required],
      valid: ["0"]
    });
    this.twitterForm = this.fb.group({
      profile: [this.profileData['twitter'],Validators.required],
      valid: ["0"]
    });
    this.linkedinForm = this.fb.group({
      profile: [this.profileData['linkedin'],Validators.required],
      valid: ["0"]
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
      this.loading = false;
      return;
    }

    this.markNotDone(type);

    this.factory.addSocialProfile({
      profile: form.value.profile,
      type: type
    }).subscribe((res)=>{
      if(res.status == "success") {
        form.value.valid = "1";
        this.markDone(type);
      }
      else {
        this.markNotDone(type);
        form.value.valid = "-1";
      }

    },(err)=>{
      this.markNotDone(type);
      form.value.valid = "-1";
    })

  }

  markNotDone(type: string){
    switch(type){
      case "facebook":
        this.facebookDone = false;
        break;

      case "twitter":
        this.twitterDone = false;
        break;

      case "linkedin":
        this.linkedinDone = false;
        break;

      case "instagram":
        this.instagramDone = false;
        break;
    }
  }

  markDone(type: string){
    switch(type){
      case "facebook":
        this.facebookDone = true;
        break;

      case "twitter":
        this.twitterDone = true;
        break;

      case "linkedin":
        this.linkedinDone = true;
        break;

      case "instagram":
        this.instagramDone = true;
        break;
    }
    this.checkAllCompleted();
  }

  submitForms() {
    this.loading = true;
    this.saveProfile('facebook');
    this.saveProfile('twitter');
    this.saveProfile('linkedin');
    this.saveProfile('instagram');
  }

  checkAllCompleted(){
    if(this.facebookDone && this.instagramDone && this.twitterDone && this.linkedinDone){
      console.log("All Completed");
      this.loading = false;
      this.router.navigateByUrl('/onboarding/config-analytics');
    }
  }

}

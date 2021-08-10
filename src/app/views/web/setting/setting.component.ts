import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from "ngx-toastr";
import {SettingsService} from '../../../shared/services/settings.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  loadingText: string;
  config:any;

  constructor(
      private fb: FormBuilder,
      private toastr: ToastrService,
      private factory: SettingsService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {


    this.config = {view_id:'',client_email:'',private_key:''};

    if(this.route.snapshot.data.setting.status=="success"){
      this.config = this.route.snapshot.data.setting.data;
    }

    console.log("Config",this.config);

    this.buildFormBasic();
  }

  submit(){

    if(this.formBasic.invalid){
      this.toastr.error('Fill in all the fields','Oops');
      return;
    }

    this.factory.updateSettings('analytics',
      this.formBasic.value
    ).subscribe((res)=>{
      this.toastr.success('Settings updated',
          'Request successful');
    },(err)=>{
      this.toastr.error('Failed to update settings',
          'Request failed');
    })
  }

  buildFormBasic() {
    this.formBasic = this.fb.group({
      view_id: [this.config.view_id,Validators.required],
      client_email: [this.config.client_email,Validators.required],
      private_key: [this.config.private_key,Validators.required],
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HostingService} from '../../../shared/services/web/hosting.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-hosting',
  templateUrl: './hosting.component.html',
  styleUrls: ['./hosting.component.scss']
})
export class HostingComponent implements OnInit {

  rows = [];

  activeId: string = "";
  formBasic: FormGroup;
  loading: boolean;
  loadingText: string;
  showPassword: boolean = false;

  constructor(public fb: FormBuilder,
              private factory: HostingService,
              private message: ToastrService) { }

  ngOnInit() {

    this.formBasic = this.fb.group({
      domain: ['',Validators.required]

    });

    this.load();

    this.rows = JSON.parse(`[
      {
        "domain": "Loading",
        "ip": "",
        "up_time": "",
        "id": ""
      }
    ]`);
  }

  load(){
    this.factory.getHosting().subscribe((hosting)=>{
      this.rows = hosting;
    })
  }

  createHosting(){
    if(this.formBasic.invalid){
      Object.keys(this.formBasic.controls).map((k,i)=>{
        this.formBasic.controls[k].markAsDirty();
      })

      return;
    }

    this.loading = true;
    this.loadingText = 'Creating account';

    this.checkProgress();

    this.factory.createAccount(this.formBasic.value.domain).subscribe((r)=>{
      this.loading = false;

      if(r.status =='success') {
        this.load();

        this.message.success("Hosting account created successfully.", "Yay!");
      }
      else{
        this.message.error("There was an error in creating your account.","Oops!");
      }

    },(er)=>{
      this.loading = false;
      this.message.error("There was an error in creating your account.","Oops!");
    });


  }

  togglePassword(){
    this.showPassword = !this.showPassword;
  }
  checkProgress(){
    setTimeout(()=>{
      if(this.loading)
        this.loadingText = 'Still creating';
    },8000);
  }

}

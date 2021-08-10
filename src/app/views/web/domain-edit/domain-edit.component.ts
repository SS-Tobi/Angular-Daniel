import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth.service';

import {IDomain} from '../../../shared/models/IDomain';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import {INameserver} from '../../../shared/models/INameserver';
import {ToastrService} from 'ngx-toastr';
import {DomainService} from '../../../shared/services/web/domain.service';

@Component({
  selector: 'app-domain-edit',
  templateUrl: './domain-edit.component.html',
  styleUrls: ['./domain-edit.component.scss']
})
export class DomainEditComponent implements OnInit,OnDestroy {

  formBasic: FormGroup;
  loading: boolean;
  loadingText: string;

  domain:IDomain;


  buildFormBasic() {
    this.formBasic = this.fb.group({
      ns1:[this.domain.nameservers.ns1,Validators.required],
      ns2:[this.domain.nameservers.ns2,Validators.required],
      ns3:[this.domain.nameservers.ns3],
      ns4:[this.domain.nameservers.ns4],
    });
  }

  constructor(public fb:FormBuilder,
              public auth:AuthService,
              public http:HttpClient,
              public route:ActivatedRoute,
              public domainService:DomainService,
              public router:Router,
              private message: ToastrService) {}

  doUpdateNameservers(){
    if(this.formBasic.invalid){
      Object.keys(this.formBasic.controls).map((k,i)=>{
        this.formBasic.controls[k].markAsDirty();
      })
      return;
    }

    const form_data = this.formBasic.value;
    const ns:INameserver ={
      ns1:form_data.ns1,
      ns2:form_data.ns2,
      ns3:form_data.ns3,
      ns4:form_data.ns4,
    }

    this.loading = true;
    this.loadingText = "Processing";
    this.domainService.updateNameservers(
        this.domain._id,ns
    ).subscribe((domain)=>{
      this.router.navigate(['web/domains']);
      this.loading = false;
      this.message.success('Domain updated successfully.','Request successful')
    },(err)=>{
      console.log("Error in updating domain");
      this.loading = false;
      this.message.error('Error in updating domain.','Request failed')
    })

  }
  ngOnInit() {

      this.domain = this.route.snapshot.data.domain;

      console.log(this.domain);
    this.buildFormBasic();


  }

  ngOnDestroy(): void { }


}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth.service';
import {IDomain} from '../../../shared/models/IDomain';

import {INameserver} from '../../../shared/models/INameserver';
import {Observable, Subject, Subscription} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {DomainService} from '../../../shared/services/web/domain.service';

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.scss']
})
export class DomainsComponent implements OnInit {

  rows:IDomain[] = [];

  formBasic: FormGroup;
  loading: boolean;
  loadingText: string;
  activeId: string = "";
  buttonContent: string = "Add New Domain";




  buildFormBasic() {
    this.formBasic = this.fb.group({
      domain: ['',Validators.required],
      years: ['',[Validators.required,Validators.min(1),Validators.max(5)]],
      ns1:['',Validators.required],
      ns2:['',Validators.required],
      ns3:[''],
      ns4:[''],
    });
  }

  constructor(public fb:FormBuilder,
              public auth:AuthService,
              public domainService: DomainService,
              private message: ToastrService) {}

  doRegisterDomain(){
    if(this.formBasic.invalid){
      Object.keys(this.formBasic.controls).map((k,i)=>{
        this.formBasic.controls[k].markAsDirty();
      })
      return;
    }
    const form_data= this.formBasic.value;

    console.log(form_data);

    this.loading = true;
    this.loadingText ="Please wait..";

    const nameservers: INameserver= new INameserver();

    nameservers.ns1 = form_data.ns1;
    nameservers.ns2 = form_data.ns2;
    nameservers.ns3 = form_data.ns3;
    nameservers.ns4 = form_data.ns4;


    const domain:IDomain = {
      _id:null,
      domain: form_data.domain,
      years: Number(form_data.years),
      nameservers:nameservers,
      user_id:null
    };

    this.loading = true;
    this.loadingText = "Registering";
    //send to server
    this.domainService.registerDomain(domain,()=>{
      this.loading = false;
      this.formBasic.reset();
      this.fetchDomains();
      this.loading = false;


    });

  }

  ngOnInit() {
    this.rows = JSON.parse(`[
      {
        "domain": "loading",
        "expiry_date": "5/31/2019",
        "route_to": "192.168.1.1",
        "id": "1"
      },
       {
        "domain": "",
        "expiry_date": "6/08/2019",
        "route_to": "192.168.1.14",
        "id": "2"
      },
       {
        "domain": "",
        "expiry_date": "6/08/2019",
        "route_to": "192.168.1.14",
        "id": "2"
      }
      ,
       {
        "domain": "",
        "expiry_date": "6/08/2019",
        "route_to": "192.168.1.14",
        "id": "2"
      }
      ,
       {
        "domain": "",
        "expiry_date": "6/08/2019",
        "route_to": "192.168.1.14",
        "id": "2"
      }
    ]`);



    this.buildFormBasic();

    this.fetchDomains();



  }

  fetchDomains(){
    this.domainService.getDomains().subscribe((domains)=>{
      console.log("Fetch domains",domains);
      this.rows = domains;
    })
  }



  openAddDomainForm(){
    if(this.activeId === 'ngb-panel-0'){
      this.activeId = '';
      this.buttonContent = "Add New Domain";
    }else{
      this.activeId = 'ngb-panel-0';
      this.buttonContent = "Close Form";
    }
  }


  deleteDomain(domainId: string) {
    this.domainService.deleteDomain(domainId).subscribe((response:any)=>{
      if(response.status=="success"){
        this.fetchDomains();
        this.message.success('Domain deleted successfully.','Request successful')

      }
    },(err)=>{
      console.log("Error in deleting domain");
      this.message.error('Unable to delete domain. Try again later','Request failed')
    })
  }

}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {SettingsService} from "../../../shared/services/settings.service";
import {MarkFormAsDirty} from "../../../shared/helper/mark-form-dirty";
import {ActivatedRoute} from "@angular/router";
import {CompetitorService} from "../../../shared/services/competitor.service";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  formBasic: FormGroup;
  loading: boolean;
  showSuggesstion = false;
  lisItems = [];

  constructor(
      private fb: FormBuilder,
      private toastr: ToastrService,
      private factory: SettingsService,
      private route: ActivatedRoute,
      private competitorService: CompetitorService,
  ) { }

  config:any;

  ngOnInit() {

    this.config = {business_name:''};

    if(this.route.snapshot.data.setting.status=="success"){
      this.config = this.route.snapshot.data.setting.data;
    }

    this.buildFormBasic();
  }

  buildFormBasic() {
    this.formBasic = this.fb.group({
      business_name: [this.config.business_name,[Validators.required]]
    });
  }

  submit() {
    MarkFormAsDirty(this.formBasic);
    if(this.formBasic.invalid){
      this.toastr.error('Fill in all the fields','Oops');
      return;
    }
    this.factory.updateSettings('review',
        this.formBasic.value
    ).subscribe((res)=>{
      this.toastr.success('Settings updated',
          'Request successful');
    },(err)=>{
      this.toastr.error('Failed to update settings',
          'Request failed');
    });

  }

  checkBusiness() {
    const stringToSearch = this.formBasic.value.business_name;
    if(stringToSearch.length>2) {
      this.competitorService.searchBusiness(stringToSearch).subscribe(
          res => {
            // @ts-ignore
            this.lisItems = res.places;
            console.log(this.lisItems);
            if (this.lisItems.length > 0) {
              this.showSuggesstion = true;
            } else {
              this.showSuggesstion = false;
            }
          },
      )
    }
  }

  setInputValue(newValue: string) {
    this.showSuggesstion = false;
    this.formBasic.controls.business_name.setValue(newValue)
  }

}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from "ngx-toastr";
import {CompetitorService} from '../../../shared/services/competitor.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-competitor-add',
  templateUrl: './competitor-add.component.html',
  styleUrls: ['./competitor-add.component.css']
})
export class CompetitorAddComponent implements OnInit {

  formBasic: FormGroup;
  loading: boolean;
  loadingText: string;
  showSuggesstion = false;

  lisItems = [];

  constructor(
      private fb: FormBuilder,
      private toastr: ToastrService,
      private factory: CompetitorService,
      private router: Router,
  ) { }

  ngOnInit() {
    this.buildFormBasic();
  }

  buildFormBasic() {
    this.formBasic = this.fb.group({
        name: ['',Validators.required],
        website: ['',Validators.required],
        instagram: ['',Validators.required],
        facebook: ['',Validators.required],
        twitter: ['',Validators.required],
    });
  }

  submit(){
    if(this.formBasic.invalid){
      Object.keys(this.formBasic.controls).map((k,i)=>{
        this.formBasic.controls[k].markAsDirty();
      });
      return;
    }

    const form_data = this.formBasic.value;

    const competitor = {
      name: form_data.name,
      website: form_data.website,
      facebook: form_data.facebook,
      twitter: form_data.twitter,
      instagram: form_data.instagram,
    };

    this.loading = true;
    this.loadingText = "Saving...";

    this.factory.addCompetitor(competitor).subscribe((r)=>{
      this.loading = false;
      this.toastr.success('Success','Competitor has been added successfully');
      this.router.navigate(['/competitor/view']);
    },(err)=>{
      this.loading = false;
      this.toastr.error('Oops','There was an error in adding competitor');
    })

  }

  checkBusiness() {
   const stringToSearch = this.formBasic.value.name;
   if(stringToSearch.length>2) {
     this.factory.searchBusiness(stringToSearch).subscribe(
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
    this.formBasic.controls.name.setValue(newValue)
  }
}

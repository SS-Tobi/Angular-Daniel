import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {CompetitorService} from '../../../shared/services/competitor.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-competitor-edit',
  templateUrl: './competitor-edit.component.html',
  styleUrls: ['./competitor-edit.component.scss']
})
export class CompetitorEditComponent implements OnInit {

  formBasic: FormGroup;
  data;
  loading: boolean;
  loadingText: string;

  constructor(
      private fb: FormBuilder,
      private toastr: ToastrService,
      private factory: CompetitorService,
      private router: Router,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.data = this.route.snapshot.data.data.object;
    this.buildFormBasic();
  }

  buildFormBasic() {
    this.formBasic = this.fb.group({
      name: [this.data.name,Validators.required],
      website: [this.data.website,Validators.required],
      instagram: [this.data.instagram,Validators.required],
      facebook: [this.data.facebook,Validators.required],
      twitter: [this.data.twitter,Validators.required],
    });
  }

  submit(){
    if(this.formBasic.invalid){
      Object.keys(this.formBasic.controls).map((k,i)=>{
        this.formBasic.controls[k].markAsDirty();
      })
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

    this.factory.updateCompetitor(
        this.route.snapshot.params.id,
        competitor
    ).subscribe((r)=>{
      this.loading = false;
      this.toastr.success('Success','Competitor has been updated successfully');
      this.router.navigate(['/competitor/view']);
    },(err)=>{
      this.loading = false;
      this.toastr.error('Oops','There was an error in updating competitor');
    })
  }

}

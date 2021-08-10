import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {PlansService} from "../../../../shared/services/plans/plans.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  formBasic: FormGroup;
  data;
  loading: boolean;
  loadingText: string;

  constructor(
      private fb: FormBuilder,
      private toastr: ToastrService,
      private factory: PlansService,
      private router: Router,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.data = this.route.snapshot.data.data.object;
    this.buildFormBasic();
  }

  buildFormBasic() {
    this.formBasic = this.fb.group({
      name: [this.data.name,[Validators.required]],
      monthly_price: [this.data.monthly_price,[Validators.required, Validators.pattern('^[0-9.]{1,20}$')]],
      yearly_price: [this.data.yearly_price,[Validators.required, Validators.pattern('^[0-9.]{1,20}$')]],
      description: [this.data.description,[Validators.required]],
      update_interval: [this.data.update_interval,[Validators.required, Validators.pattern('^[0-9.]{1,20}$')]],
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

    const plan = {
      name: form_data.name,
      monthly_price: form_data.monthly_price,
      yearly_price: form_data.yearly_price,
      description: form_data.description,
      update_interval: form_data.update_interval,
    };

    this.loading = true;
    this.loadingText = "Saving...";

    this.factory.update(
        this.route.snapshot.params.id,
        plan
    ).subscribe((r)=>{
      this.loading = false;
      this.toastr.success('Success','Plan has been updated successfully');
      this.router.navigate(['/admin/plans']);
    },(err)=>{
      this.loading = false;
      this.toastr.error('Oops','There was an error in updating plan');
    })
  }

}

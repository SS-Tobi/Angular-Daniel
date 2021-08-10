import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from "ngx-toastr";
import {Router} from '@angular/router';
import {MarkFormAsDirty} from "../../../../shared/helper/mark-form-dirty";
import {PlansService} from "../../../../shared/services/plans/plans.service";

@Component({
  selector: 'app-competitor-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  formBasic: FormGroup;
  loading: boolean;
  loadingText: string;
  showSuggesstion = false;

  lisItems = [];

  constructor(
      private fb: FormBuilder,
      private toastr: ToastrService,
      private factory: PlansService,
      private router: Router,
  ) { }

  ngOnInit() {
    this.buildFormBasic();
  }

  buildFormBasic() {
    this.formBasic = this.fb.group({
        name: ['',[Validators.required]],
        monthly_price: ['',[Validators.required, Validators.pattern('^[0-9.]{1,20}$')]],
        yearly_price: ['',[Validators.required, Validators.pattern('^[0-9.]{1,20}$')]],
        description: ['',[Validators.required]],
        update_interval: ['',[Validators.required, Validators.pattern('^[0-9.]{1,20}$')]],
    });
  }

  submit(){
    MarkFormAsDirty(this.formBasic);
    if(this.formBasic.invalid){
      return false;
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

    this.factory.add(plan).subscribe((r)=>{
      this.loading = false;
      this.toastr.success('Success','Plan has been added successfully');
      this.router.navigate(['/admin/plans']);
    },(err)=>{
      this.loading = false;
      this.toastr.error('Oops','There was an error in adding plan');
    })

  }


}

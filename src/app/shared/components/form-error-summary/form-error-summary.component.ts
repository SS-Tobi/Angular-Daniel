import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-form-error-summary',
  templateUrl: './form-error-summary.component.html',
  styleUrls: ['./form-error-summary.component.scss']
})
export class FormErrorSummaryComponent implements OnInit {

  @Input() form: FormGroup;

  errors:any = [];

  constructor() {

  }

  ngOnInit() {
    const obj = this;
    this.form.valueChanges.subscribe(function(data){

      obj.errors = [];
      Object.keys(data).map(function (k,index){

        if(obj.form.controls[k].errors){
          Object.keys(obj.form.controls[k].errors).map(function (_k,_i){
            obj.errors.push({control:k,errors:
                  _k +" = " +obj.form.controls[k].errors[_k]
            });
          })

        }
      })
      console.log(obj.errors);
    })

    console.log("SummaryCOmponent",this.form.controls);
  }

}

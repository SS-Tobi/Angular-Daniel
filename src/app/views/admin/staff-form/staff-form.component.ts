import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../shared/services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {YiiErrorPrinter} from "../../../shared/helper/yii-error-printer";
import {MarkFormAsDirty} from "../../../shared/helper/mark-form-dirty";
import {MustMatch} from "../../../shared/helper/must-match.validator";

@Component({
  selector: 'app-staff-form',
  templateUrl: './staff-form.component.html',
  styleUrls: ['./staff-form.component.scss']
})
export class StaffFormComponent implements OnInit {

  loading: boolean;
  form: FormGroup;
  _id = '';
  pageTitle = 'Add';

  paymentGateways = [];

  constructor(
      private service: UserService,
      private fb: FormBuilder,
      private router: Router,
      private route: ActivatedRoute,
      private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.checkId();
  }

  checkId() {
    this._id = this.route.snapshot.paramMap.get('id');
    if (this._id != null) {
      this.pageTitle = 'Update';
      this.service.getProfile(this._id).subscribe(
          (res: any) => {
            for (const key in res) {
              const value = res[key];
              const matchingControl = this.form.controls[key];
              if (matchingControl) {
                if(key=='payment_gateways_allowed'){
                  const newVal = value.split(',');
                  matchingControl.setValue(newVal);
                }else {
                  matchingControl.setValue(value);
                }
              }
            }
          },
          err => {
            this.toastr.error('Invalid request', 'Oh!');
            this.router.navigate(['blacklists/view']);
          }
      );
    }
  }

  buildForm() {
    this.form = this.fb.group({
      full_name: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]],
    }, {
      validator: MustMatch('password', 'confirm_password')
    });
  }

  get f() { return this.form.controls; }

  saveData() {

    let formFields = this.form.value;
    if (this.form.invalid) {
      MarkFormAsDirty(this.form);
      console.log("Form Invalid");
      return;
    }

    this.loading = true;

    const fields = {
      full_name: formFields.full_name,
      email: formFields.email,
      password: formFields.password,
      on_boarding: 'completed',
      role:'staff'
    };

    if (this._id != null) {
      this.service.updateStaff(fields, this._id)
          .subscribe(
              data => {
                this.toastr.success('Staff has been updated', 'Yay!');
                this.loading = false;
                this.router.navigate(['admin/staff']);
              },
              err => {
                this.loading = false;
                let error = YiiErrorPrinter(err, this.form);
                if (!error) {
                  error = 'Failed to save Staff';
                }
                this.toastr.error(error, 'Oh');
              });

    } else {
      // insert
      this.service.insertStaff(fields)
          .subscribe(
              data => {
                this.toastr.success('Staff has been saved', 'Yay!');
                this.loading = false;
                this.router.navigate(['admin/staff']);
              },
              err => {
                this.loading = false;
                let error = YiiErrorPrinter(err, this.form);
                if (!error) {
                  error = 'Failed to save Staff';
                }
                this.toastr.error(error, 'Oh');
              });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-website-info',
  templateUrl: './website-info.component.html',
  styleUrls: ['./website-info.component.scss']
})
export class WebsiteInfoComponent implements OnInit {

  formBasic: FormGroup;
  loading: boolean;
  loadingText: string;


  constructor(
      private fb: FormBuilder,
      private toastr: ToastrService,
      private router: Router,
  ) { }

  ngOnInit() {
    this.buildFormBasic();
  }

  buildFormBasic() {
    this.formBasic = this.fb.group({
      experience: []
    });
  }

    submit() {
      this.router.navigateByUrl('/dashboard/overview');
      this.toastr.success("Welcome to Dashboard",'Yippy :)');
    }
}

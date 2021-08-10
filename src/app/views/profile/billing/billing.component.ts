import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {BillingService} from "../../../shared/services/billing/billing.service";
import {Utils} from "../../../shared/utils";

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  rows = [];
  env;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private billingService: BillingService,
      private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.loadData();
    this.env = Utils.getConstants();
  }

  loadData(){
    this.billingService.getAll().subscribe(
        res=>{
          this.rows = res;
          this.rows = [...this.rows];
        },
        error1 => {
          this.toastr.error("Failed to fetch history","Oh!");
        }
    )
  }


}

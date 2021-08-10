import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../../shared/services/auth.service";
import {UserService} from "../../../shared/services/user.service";
import {LocalStoreService} from "../../../shared/services/local-store.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Utils} from "../../../shared/utils";
import {PlansService} from "../../../shared/services/plans/plans.service";

@Component({
  selector: 'app-basic-info',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  plans = [];
  evn;
  chosedDuration = "monthly";

  constructor(
      private fb: FormBuilder,
      private toastr: ToastrService,
      public auth:AuthService,
      public router:Router,
      public userService: UserService,
      public planService: PlansService,
      private store: LocalStoreService,
      private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.evn = Utils.getConstants();
    this.plans = this.route.snapshot.data.plans;
  }

  buyPlan(_id: string, duration: string) {
    this.planService.buyPlan(_id,duration).subscribe(
        response=>{
            // @ts-ignore
                var stripe = Stripe(response.public_key);
              stripe.redirectToCheckout({
                sessionId: response.object.id
              }).then(result=>{
                this.toastr.error("Failed to complete your request, please try again later",'Oops!')
              });
        },
        error=>{
          this.toastr.error("Failed to complete your request, please try again later.",'Oops!')
        }
    );
  }


}

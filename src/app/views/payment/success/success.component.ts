import { Component, OnInit } from '@angular/core';
import {interval, Subscription} from "rxjs";
import {PlansService} from "../../../shared/services/plans/plans.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {AuthService} from "../../../shared/services/auth.service";
import {LocalStoreService} from "../../../shared/services/local-store.service";

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
    loading = true;
    loadingText = "Verifying";

    subscription: Subscription;

      constructor(
          private plansService: PlansService,
          private toastrService: ToastrService,
          private authService: AuthService,
          private localStoreService: LocalStoreService,
          private router: Router,
      ) { }

      ngOnInit() {
          const source = interval(3500);
          this.subscription = source.subscribe(val => this.confirmPayment());
      }

    confirmPayment() {
        this.plansService.confirmActivation().subscribe(
            res => {
                this.localStoreService.setItem('auth_token',res.token);
                this.authService.checkAuth();
                this.toastrService.success(res.message, 'Yippy!');
                this.subscription.unsubscribe();
                this.router.navigateByUrl('/dashboard/overview');
            }
        );
    }

}

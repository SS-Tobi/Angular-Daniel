import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {NavigationService} from "../../shared/services/navigation.service";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(
      private router: Router,
      private toastrService: ToastrService,
      private navigationService: NavigationService,
      private auth: AuthService,
  ) { }

  ngOnInit() {
  }

    skipOnBoarding() {
      this.toastrService.success('Welcome to Dashboard','Yippy :)');
      this.navigationService.refreshMenu();
        this.router.navigateByUrl('/dashboard/overview');
    }
}

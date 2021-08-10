import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {NavigationService} from "../../shared/services/navigation.service";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {

  constructor(
      private router: Router,
      private toastrService: ToastrService,
      private navigationService: NavigationService,
      public auth: AuthService,
  ) { }

  ngOnInit() {
  }

    skipOnBoarding() {
      this.toastrService.success('Welcome to Dashboard','Yippy :)');
      this.navigationService.refreshMenu();
        this.router.navigateByUrl('/dashboard/overview');
    }
}

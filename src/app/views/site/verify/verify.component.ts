import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {interval, Subscription} from "rxjs";
import {UserService} from "../../../shared/services/user.service";
import {ToastrService} from "ngx-toastr";
import {LocalStoreService} from "../../../shared/services/local-store.service";

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit, OnDestroy {

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private service: UserService,
      private toaster: ToastrService,
      private storage: LocalStoreService,
  ) { }

  action = '';
  code = '';

  loadingText= '';
  loadingDots = 0;

  subscription: Subscription;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.action = params.action;
      this.code = params.code;
      this.verify();
    });
  }

  private verify() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
    const source = interval(200);
    this.subscription = source.subscribe(val => this.runLoading());

    this.service.verifyEmail(this.action,this.code).subscribe(
        (res: {message: string,token: string})=>{
          this.toaster.success(res.message,"Great!");
          let oldToken = this.storage.getItem('auth_token');
          if(oldToken!=''){
            this.storage.setItem('auth_token', res.token);
          }
          this.router.navigateByUrl('/dashboard/overview');
        },
        error => {
          this.toaster.error("Failed to verify your request.","Oh!");
          this.router.navigateByUrl('/dashboard/overview');
        }
    );

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private runLoading() {
    this.loadingDots++;
    if(this.loadingDots>3){
      this.loadingDots = 0;
    }
    let loadingDotHtml = '';
    for (let i = 0; i < this.loadingDots; i++) {
      loadingDotHtml += ".";
    }
    this.loadingText = loadingDotHtml;
  }

}

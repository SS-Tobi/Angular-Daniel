import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ActiveplanGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.auth.user!=null && this.auth.isUser()) {
          if (this.auth.isPlanExpired()) {
              this.router.navigateByUrl('/payment/plans');
              return false;
          } else {
              return true;
          }
      }else{
          return true;
      }
  }

}

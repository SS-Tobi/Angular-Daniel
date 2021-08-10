import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class IsStaffGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {


      if(this.auth.checkAuth()){

          //console.log(this.auth.isStaff());

        if(this.auth.isStaff()) {
            return true;
        }
        this.router.navigate(['/dashboard/overview']);
        return  false;
      }


  }
}

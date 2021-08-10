import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {SettingsService} from './../settings.service';
import {AuthService} from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class SettingsResolverService
    implements Resolve<any>{

  constructor(private factory:SettingsService,
              private route:ActivatedRoute,
              private auth: AuthService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    let navType = "user_navigation";
    if(this.auth.isAdmin()){
      navType = "admin_navigation";
    }else if(this.auth.isStaff()){
      navType = "staff_navigation";
    }

    console.log("Nav");

    return this.factory.getSetting(navType);

  }

}

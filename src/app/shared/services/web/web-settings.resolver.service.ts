import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {SettingsService} from './../settings.service';
import {AuthService} from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class WebSettingsResolverService
    implements Resolve<any>{

  constructor(private factory:SettingsService,
              private route:ActivatedRoute,
              private auth: AuthService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.factory.getSetting('analytics');

  }

}

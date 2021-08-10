import { Injectable } from '@angular/core';
import {AnalyticsService} from './analytics.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsOverviewResolverService implements Resolve<any>{

  constructor(private factory: AnalyticsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      Observable<any> | Promise<any> | any {
    return this.factory.getOverview()

  }


}

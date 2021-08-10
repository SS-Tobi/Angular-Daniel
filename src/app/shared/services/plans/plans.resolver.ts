import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {PlansService} from "./plans.service";

@Injectable({
  providedIn: 'root'
})
export class PlansResolver implements Resolve<any>{

  constructor(private factory: PlansService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.factory.getAll();
  }
}

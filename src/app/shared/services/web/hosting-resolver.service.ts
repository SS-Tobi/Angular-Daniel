import { Injectable } from '@angular/core';
import {DomainService} from './domain.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HostingResolverService implements  Resolve<any>{

  constructor(public domainServer: DomainService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<any> | Promise<any>
      | any {
    console.log("ID = "+ route.params.id);

    return this.domainServer.getDomain(route.params.id);

  }

}

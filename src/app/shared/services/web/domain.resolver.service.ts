import {Injectable} from '@angular/core';
import {DomainService} from './domain.service';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterState, RouterStateSnapshot} from '@angular/router';
import {IDomain} from '../../models/IDomain';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DomainResolverService implements Resolve<IDomain>{

  constructor(public domainServer: DomainService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IDomain> | Promise<IDomain> | IDomain {
    console.log("ID = "+ route.params.id);

    return this.domainServer.getDomain(route.params.id);

  }



}

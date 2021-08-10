import { Injectable } from '@angular/core';
import {CompetitorService} from './competitor.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SingleCompetitorResolver implements Resolve<any>{

    constructor(private factory: CompetitorService) { }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return this.factory.getCompetitor(route.params.id);
    }
}

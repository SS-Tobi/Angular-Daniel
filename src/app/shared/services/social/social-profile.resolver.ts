import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {SocialService} from './social.service';

@Injectable({
    providedIn: 'root'
})
export class SocialProfileResolver implements Resolve<any>{

    constructor(private factory: SocialService) { }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return this.factory.getSocialProfiles();
    }
}

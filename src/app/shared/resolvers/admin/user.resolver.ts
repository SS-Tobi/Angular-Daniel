import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from "../../services/user.service";

@Injectable({
    providedIn: 'root'
})
export class UserResolver implements Resolve<any>{

    constructor(private factory: UserService) { }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        console.log("dasdasd");
        return this.factory.getProfile(route.params.id);
    }
}

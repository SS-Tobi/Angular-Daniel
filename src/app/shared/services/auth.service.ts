import {Injectable} from '@angular/core';
import {LocalStoreService} from './local-store.service';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import * as jwt_decode from "jwt-decode";
import {IUser} from '../models/IUser';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {Utils} from '../utils';

@Injectable({
    providedIn: 'root'
})
export class AuthService {


    authenticated = false;
    token = false;
    public user;

    constructor(private store: LocalStoreService,
                private router: Router,
                private http: HttpClient,
    ) {
        this.checkAuth();
        this.loop();
    }

    loop() {
        const obj = this;
        setTimeout(function () {
            obj.checkAuth();
        }, 10000);
    }

    isPlanExpired(){
        let userPlanExpiry = this.user.plan_expiry?this.user.plan_expiry:0;
        this.checkAuth();
        let date = new Date();
        let currentTimeStamp = date.getTime()/1000;

        if(userPlanExpiry<=currentTimeStamp){
            console.log("Plan Is Expired");
            return true;
        }else{
            return false;
        }
    }

    checkAuth() {
        this.authenticated = this.store.getItem("login_status");
        this.token = this.store.getItem('auth_token');
        try {
            this.user = jwt_decode(this.token);
            console.log("Cu", this.user);
        } catch (Error) {
            return false;
            /*if(this.router.url.indexOf('site/') < 0 && this.router.url.indexOf('sessions/') < 0){
                console.log("Go To Logout");
                this.signout();
            }*/
        }
        return this.authenticated;
    }

    isAdmin() {
        if (this.user.role == "admin") {
            return true;
        }
        return false;
    }

    isStaff() {
        if (this.user.role == "staff") {
            return true;
        }
        return false;
    }

    isUser() {
        if (this.user.role == "user") {
            return true;
        }
        return false;
    }

    getuser() {
        return of({});
    }

    signin(credentials) {
        return this.http.post(Utils.getConstants().API_HOST + 'auth/login', {
            email: credentials.email,
            password: credentials.password
        });
    }

    signout(navigate: boolean = true) {
        this.authenticated = false;
        this.store.clear();
        this.store.setItem('demo_login_status', false);
        this.store.setItem('login_status', false);
        if (navigate)
            if(
                this.router.url.indexOf('site') < 0
            ){
                this.router.navigateByUrl('/sessions/signin');
            }else{

            }

    }

    signup(user: IUser): Observable<any> {
        return this.http.post(Utils.getConstants().API_HOST + 'auth/register', user);
    }

    resetPassword(fields){
        return this.http.post(Utils.getConstants().API_HOST + 'auth/reset', fields);
    }
}

import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, ObservableInput, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthService} from './services/auth.service';
import {Router} from "@angular/router";

@Injectable()
export class IsGuestInterceptor implements HttpInterceptor{

    constructor(
        private auth: AuthService,
        private router: Router,
    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((err,ob):ObservableInput<any> => {
                if(
                    req.url.indexOf('auth/login') < 0
                    &&
                    req.url.indexOf('auth/register') < 0
                ) {
                    if(
                        this.router.url.indexOf('site') < 0
                    ){
                        if (err.status == 403) {//forbidden
                            console.log("Not logged in, reloading");
                            this.auth.signout();
                            location.reload(true);
                        }
                        else if(err.status == 500){
                            if(err.error.indexOf('jwt expired') > -1){
                                console.log("JWT Expired");
                                this.auth.signout();
                                location.reload(true);
                            }
                        }
                    }else{
                        console.log("Is At Site");
                    }
                }
                const error = err.error.message || err.statusText;
                return throwError(error);
            })
        )
    }

}

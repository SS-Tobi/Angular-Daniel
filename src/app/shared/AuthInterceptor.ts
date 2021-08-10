import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {LocalStoreService} from './services/local-store.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private store: LocalStoreService) {}
    intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
        const token = this.store.getItem('auth_token');
        const reqNew = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + token)
        });

        return next.handle(reqNew);
        // return undefined;
    }

}

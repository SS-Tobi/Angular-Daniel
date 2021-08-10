import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utils} from '../utils';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    constructor(private http: HttpClient) { }

    getStats():Observable<any>{
        return this.http.get(Utils.getConstants().API_HOST+
            'dashboard/stats');
    }

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utils} from '../../utils';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private http: HttpClient) { }

  getOverview():Observable<any>{
    return this.http.get(Utils.getConstants().API_HOST+
        'modules/web/analytics/overview');
  }

  getUserOverview(_id):Observable<any>{
    return this.http.get(Utils.getConstants().API_HOST+
        'modules/web/analytics/overview?_id='+_id);
  }

}

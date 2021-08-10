import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utils} from "../../utils";

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  constructor(private http: HttpClient) { }

  getAll():Observable<any>{
    return this.http.get(Utils.getConstants().API_HOST+
        'modules/plans');
  }

  get(id):Observable<any>{
    return this.http.get(Utils.getConstants().API_HOST +
        'modules/plans/'+id);
  }

  update(id,data):Observable<any>{
    return this.http.put(Utils.getConstants().API_HOST +
        'modules/plans/'+id,data);
  }

  add(competitor):Observable<any>{

    return this.http.post(Utils.getConstants().API_HOST+
        'modules/plans',competitor)
  }

  delete(id): Observable<any>{
    return this.http.delete(Utils.getConstants().API_HOST+
        'modules/plans/'+id);
  }

  buyPlan(id,duration): Observable<any>{
    return this.http.post(Utils.getConstants().API_HOST+
        'modules/plans/buy-now',{
      id:id,
      duration:duration,
    });
  }

  confirmActivation(): Observable<any>{
    return this.http.get(Utils.getConstants().API_HOST+
    'modules/plans/confirm-activation');
  }

}

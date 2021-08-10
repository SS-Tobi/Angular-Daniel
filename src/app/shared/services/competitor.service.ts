import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utils} from '../utils';

@Injectable({
  providedIn: 'root'
})
export class CompetitorService {

  constructor(private http: HttpClient) { }

  getCompetitors():Observable<any>{
    return this.http.get(Utils.getConstants().API_HOST+
        'modules/competitor');
  }

  getAllCompetitors():Observable<any>{
    return this.http.get(Utils.getConstants().API_HOST+
        'modules/competitor/all');
  }

  getCompetitor(id):Observable<any>{
    return this.http.get(Utils.getConstants().API_HOST +
        'modules/competitor/'+id);
  }

  updateCompetitor(id,data):Observable<any>{
    return this.http.put(Utils.getConstants().API_HOST +
        'modules/competitor/'+id,data);
  }

  addCompetitor(competitor):Observable<any>{

    return this.http.post(Utils.getConstants().API_HOST+
        'modules/competitor',competitor)
  }

  deleteCompetitor(id): Observable<any>{
    return this.http.delete(Utils.getConstants().API_HOST+
        'modules/competitor/'+id);
  }

  searchBusiness(string){
    return this.http.get(Utils.getConstants().API_HOST +
        'user/locations/'+string);
  }

}

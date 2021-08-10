import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {Observable} from 'rxjs';
import {Utils} from '../../utils';
import {IDomain} from "../../models/IDomain";

@Injectable({
  providedIn: 'root'
})
export class HostingService {

  constructor(private http: HttpClient,
              private message: ToastrService) { }

  getHosting():Observable<any>{
    return this.http.get<any>
    (Utils.getConstants().API_HOST+"modules/web/hosting");
  }

  createAccount(domain): Observable<any>{
    return this.http.post<any>
    (Utils.getConstants().API_HOST+"modules/web/hosting",{
      domain: domain
    });
  }

  getAll(){
    return this.http.get<any>
    (Utils.getConstants().API_HOST+"modules/web/all-hosting");
  }

}

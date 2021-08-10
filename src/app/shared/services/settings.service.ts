import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utils} from '../utils';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http:HttpClient) {

  }

  updateSettings(type,config):Observable<any>{
    return this.http.put(Utils.getConstants().API_HOST+
    '/user/profile/settings',{
      type:type,
      config:config
    })
  }

  getSetting(type):Observable<any>{
    return this.http.post(Utils.getConstants().API_HOST+
        '/user/profile/settings',{type:type})
  }
}

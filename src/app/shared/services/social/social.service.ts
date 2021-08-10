import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utils} from '../../utils';


@Injectable({
    providedIn: 'root'
})

export class SocialService {

    constructor(private http: HttpClient) { }

    getSocialProfiles():Observable<any>{
        return this.http.get(Utils.getConstants().API_HOST+
            'modules/social/profile');
    }

    getUserSocialProfiles(_id){
        return this.http.get(Utils.getConstants().API_HOST+
            'modules/social/profile?_id='+_id);
    }

    addSocialProfile(data:{profile :string, type :string}):Observable<any>{

        return this.http.post(Utils.getConstants().API_HOST+
            'modules/social/profile',data)
    }

    deleteSocialProfile(id): Observable<any>{
        return this.http.delete(Utils.getConstants().API_HOST+
            'modules/social/profile/'+id);
    }
}

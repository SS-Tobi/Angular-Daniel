import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {Utils} from '../../utils';

@Injectable({
    providedIn: 'root'
})
export class BillingService {

    constructor(private http: HttpClient) { }

    getAll(){
        return this.http.get<any>
        (Utils.getConstants().API_HOST+"user/billing");
    }

}

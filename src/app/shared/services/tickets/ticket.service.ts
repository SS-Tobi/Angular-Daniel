import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {Observable} from 'rxjs';
import {Utils} from '../../utils';

@Injectable({
    providedIn: 'root'
})
export class TicketService {

    constructor(private http: HttpClient,
                private message: ToastrService) { }

    createTicket(ticketFields): Observable<any>{
        return this.http.post<any>
        (Utils.getConstants().API_HOST+"modules/ticket",ticketFields);
    }

    getTickets(){
        return this.http.get<any>
        (Utils.getConstants().API_HOST+"modules/ticket");
    }

    getTicket(id){
        return this.http.get<any>
        (Utils.getConstants().API_HOST+"modules/ticket/"+id);
    }

    getAllTickets(){
        return this.http.get<any>
        (Utils.getConstants().API_HOST+"modules/ticket/all");
    }

    markAsResolved(id){
        const ticketObj = {
          _id: id
        };
        return this.http.put<any>
        (Utils.getConstants().API_HOST+"modules/ticket/mark-resolved",ticketObj);
    }

    deleteTicket(id){
        return this.http.delete<any>
        (Utils.getConstants().API_HOST+"modules/ticket/"+id);
    }

}

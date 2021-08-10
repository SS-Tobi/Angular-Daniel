import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {BehaviorSubject, Subject} from 'rxjs';
import {Utils} from "../../utils";
import {IMessageItem} from "../../models/IMessageItem";

@Injectable({
    providedIn: 'root'
})
export class MessageService {

    initialHash = '';
    context;
    public ticketId = '';

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute,
    ) {
        this.context = this;
        /*this.updateMessageList();*/
    }

    public messageList$: Subject<IMessageItem> = new Subject();
    public updateAvailable$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    public updateMessageList() {
        this.context.http.get(Utils.getConstants().API_HOST+`/modules/ticket-messages/`+this.ticketId)
            .subscribe((data) => {
                if (data.has_message) {
                    data.messages.forEach(e=>{
                        this.context.messageList$.next(e);
                    });
                }
                setTimeout(() => {
                    this.context.updateMessageList();
                }, 1000);
            });
    }

    ticketMessages(){
        return this.http.get(Utils.getConstants().API_HOST+`/modules/ticket-messages/`+this.ticketId);
    }

    sendTicketMessage(fields){
        return this.http.post<any>
        (Utils.getConstants().API_HOST+"modules/ticket-messages",fields);
    }

}

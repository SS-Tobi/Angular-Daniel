import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {TicketService} from "./ticket.service";

@Injectable({
  providedIn: 'root'
})
export class TicketResolver implements Resolve<any>{

  constructor(private factory: TicketService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.factory.getTickets();
  }
}

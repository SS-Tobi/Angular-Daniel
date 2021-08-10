import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TicketService} from "../../../shared/services/tickets/ticket.service";
import {Utils} from "../../../shared/utils";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  data$;

  constructor(
      private route: ActivatedRoute,
      private ticketService: TicketService,
      private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.data$ = this.ticketService.getAllTickets();
  }

  loadTickets(){
    this.data$ = this.ticketService.getAllTickets();
  }

  markAsResolved(_id: any) {
    this.ticketService.markAsResolved(_id).subscribe(
        res=>{
          this.toastr.success("Ticket marked as resolved.","Yippy!");
          this.loadTickets();
        },
        err => {
          this.toastr.error("Failed to resolve ticket","Oh!");
        }
    );
  }

  deleteTicket(_id: any) {
    this.ticketService.deleteTicket(_id).subscribe(
        res=>{
          this.toastr.success("Ticket has been deleted.","Yippy!");
          this.loadTickets();
        },
        err => {
          this.toastr.error("Failed to delete ticket","Oh!");
        }
    );
  }

}

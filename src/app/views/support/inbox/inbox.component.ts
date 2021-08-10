import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TicketService} from "../../../shared/services/tickets/ticket.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  rows = [];

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private ticketService: TicketService,
      private toastr: ToastrService,
  ) { }

  ngOnInit() {
    if(this.route.snapshot.data.tickets){
      this.rows = this.route.snapshot.data.tickets;
    }
  }

  loadTickets(){
    this.ticketService.getTickets().subscribe(
        res=>{
          this.rows = res;
          this.rows = [...this.rows];
        },
        error1 => {
          this.toastr.error("Failed to fetch tickets","Oh!");
        }
    )
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
          this.toastr.success("Ticket has been deleted.","Oh!");
          this.loadTickets();
        },
        err => {
          this.toastr.error("Failed to delete ticket","Oh!");
        }
    );
  }
}

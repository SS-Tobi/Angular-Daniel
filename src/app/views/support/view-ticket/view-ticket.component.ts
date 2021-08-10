import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TicketService} from "../../../shared/services/tickets/ticket.service";
import {ToastrService} from "ngx-toastr";
import {MessageService} from "../../../shared/services/tickets/message.service";
import {IMessageItem} from "../../../shared/models/IMessageItem";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../shared/services/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.scss']
})
export class ViewTicketComponent implements OnInit, OnDestroy {

  ticket: any;
  formBasic : FormGroup;
  public messageLists: IMessageItem[] = [];
  loading: boolean;
  loadingText = "<i  class=\"i-Paper-Plane\">&nbsp;</i>Send";

  subscription: Subscription;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private ticketService: TicketService,
      public auth: AuthService,
      private factory: MessageService,
      private toastr: ToastrService,
      private fb: FormBuilder,
  ) { }

  buildFormBasic() {
    this.formBasic = this.fb.group({
      message: ['',[Validators.required]],
    });
  }

  @ViewChild('messageBoxContainer') private myScrollContainer: ElementRef;

  scrollGo() {
    this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight + 100;
  }

  scrollToBottom(): void {
    try {
      setTimeout(e => {
        this.scrollGo();
      }, 500);
    } catch (err) { }
  }

  ngOnInit() {
    this.ticket = this.route.snapshot.data.data.object;
    this.factory.ticketId = this.ticket._id;
    this.messageLists = this.route.snapshot.data.data.messages;

    this.scrollToBottom();

   this.factory.updateMessageList();

    this.subscription = this.factory.messageList$.subscribe(
        response => {
          this.messageLists.push(response);
          this.scrollToBottom();
        }
    );
    this.buildFormBasic();
  }

  markResolve() {
    this.ticketService.markAsResolved(this.ticket._id).subscribe(
      res=>{
        this.toastr.success("Ticket marked as resolved.","Oh!");
        this.router.navigate(['/support/inbox']);
      },
      err => {
        this.toastr.error("Failed to resolve ticket","Oh!");
      }
    );
  }

  submit() {
    if(this.formBasic.invalid){
      Object.keys(this.formBasic.controls).map((k,i)=>{
        this.formBasic.controls[k].markAsDirty();
      });
      return;
    }

    const form_data = this.formBasic.value;

    const ticketMessage = {
      message: form_data.message,
      ticket_id: this.ticket._id
    };

    this.loading = true;
    this.loadingText = "Sending...";

    this.factory.sendTicketMessage(ticketMessage).subscribe((r)=>{
      this.loading = false;
      this.toastr.success('Success','Messages has been sent.');
      const d = new Date();
      this.messageLists.push({
        message: form_data.message,
        user: "You",
        time: d.getFullYear() + '-' + d.getMonth() + '-' + d.getDay() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
      });
      this.formBasic.reset();
      this.scrollToBottom();
    },(err)=>{
      this.loading = false;
      this.toastr.error('Oops','There was an error while sending message.');
    });
  }

  ngOnDestroy(): void {
    console.log("Destroy");
    this.subscription.unsubscribe();
  }
}

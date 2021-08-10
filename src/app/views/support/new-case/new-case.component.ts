import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {TicketService} from "../../../shared/services/tickets/ticket.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-case',
  templateUrl: './new-case.component.html',
  styleUrls: ['./new-case.component.scss']
})
export class NewCaseComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  loadingText: string;
  constructor(
      private fb: FormBuilder,
      private toastr: ToastrService,
      private factory: TicketService,
      private router: Router,
  ) { }

  ngOnInit() {
    this.buildFormBasic();
  }


  buildFormBasic() {
    this.formBasic = this.fb.group({
      subject: ['',[Validators.required,Validators.min(5)]],
      message: ['',[Validators.required,Validators.min(20)]],
    });
  }

  createTicket() {
    if(this.formBasic.invalid){
      Object.keys(this.formBasic.controls).map((k,i)=>{
        this.formBasic.controls[k].markAsDirty();
      });
      return;
    }

    const form_data = this.formBasic.value;

    const ticket = {
      subject: form_data.subject,
      message: form_data.message
    };

    this.loading = true;
    this.loadingText = "Saving...";

    this.factory.createTicket(ticket).subscribe((r)=>{
      this.loading = false;
      this.toastr.success('Success','Ticket has been created.');
      this.router.navigate(['/support/inbox']);
    },(err)=>{
      this.loading = false;
      this.toastr.error('Oops','There was an error in creating ticket.');
    });
  }

}

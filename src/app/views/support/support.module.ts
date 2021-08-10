import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCaseComponent } from './new-case/new-case.component';
import { InboxComponent } from './inbox/inbox.component';
import {SupportRoutingModule} from "./support-routing.module";
import {NgxPaginationModule} from "ngx-pagination";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedComponentsModule} from "../../shared/components/shared-components.module";
import {CustomFormsModule} from "ng2-validation";
import { ViewTicketComponent } from './view-ticket/view-ticket.component';

@NgModule({
  imports: [
      CommonModule,
      SupportRoutingModule,
      NgxPaginationModule,
      NgxDatatableModule,
      NgbModule,
      FormsModule,
      SharedComponentsModule,
      CustomFormsModule,
      ReactiveFormsModule,
  ],
  declarations: [NewCaseComponent, InboxComponent, ViewTicketComponent]
})
export class SupportModule { }

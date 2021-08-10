import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewCaseComponent} from "./new-case/new-case.component";
import {InboxComponent} from "./inbox/inbox.component";
import {ViewTicketComponent} from "./view-ticket/view-ticket.component";
import {TicketResolver} from "../../shared/services/tickets/ticket.resolver";
import {SingleTicketResolver} from "../../shared/services/tickets/single-ticket.resolver";

const routes: Routes = [
    {
        path: 'new-case',
        component: NewCaseComponent
    },
    {
        path: 'inbox',
        component: InboxComponent,
        resolve: {
            tickets: TicketResolver
        }
    },
    {
        path: 'view-ticket/:id',
        component: ViewTicketComponent,
        resolve: {
            data: SingleTicketResolver
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SupportRoutingModule { }

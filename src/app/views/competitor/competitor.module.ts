import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxEchartsModule } from 'ngx-echarts';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompetitorAddComponent } from './competitor-add/competitor-add.component';
import { CompetitorRoutingModule } from "./competitor-routing.module";
import {CustomFormsModule} from "ng2-validation";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ViewComponent } from './view/view.component';
import {NgxPaginationModule} from "ngx-pagination";
import {CompetitorEditComponent} from './competitor-edit/competitor-edit.component';

@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule,
    NgxEchartsModule,
    NgxDatatableModule,
    CustomFormsModule,
    NgbModule,
    CompetitorRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,

  ],
  declarations: [CompetitorAddComponent, ViewComponent, CompetitorEditComponent]
})
export class CompetitorModule { }

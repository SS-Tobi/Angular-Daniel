import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CustomFormsModule} from "ng2-validation";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ViewComponent } from './view/view.component';
import {NgxPaginationModule} from "ngx-pagination";
import {PlansRoutingModule} from "./plans-routing.module";
import {AddComponent} from "./add/add.component";
import {EditComponent} from "./edit/edit.component";

@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule,
    NgxEchartsModule,
    NgxDatatableModule,
    CustomFormsModule,
    NgbModule,
    PlansRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,

  ],
  declarations: [AddComponent, ViewComponent, EditComponent]
})
export class PlansModule { }

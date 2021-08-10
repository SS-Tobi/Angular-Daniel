import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitorAddComponent } from "./competitor-add/competitor-add.component";
import {ViewComponent} from "./view/view.component";
import {CompetitorResolver} from '../../shared/services/competitor.resolver';
import {SingleCompetitorResolver} from '../../shared/services/single-competitor.resolver';
import {CompetitorEditComponent} from './competitor-edit/competitor-edit.component';

const routes: Routes = [
    {
        path: 'view',
        component: ViewComponent,
        resolve: {
            competitors: CompetitorResolver
        }
    },
    {
        path: 'add',
        component: CompetitorAddComponent
    },
    {
        path: 'edit/:id',
        component: CompetitorEditComponent,
        resolve: {
            data: SingleCompetitorResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompetitorRoutingModule { }

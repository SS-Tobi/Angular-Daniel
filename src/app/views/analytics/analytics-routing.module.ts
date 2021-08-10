import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";
import {CompetitorResolver} from '../../shared/services/competitor.resolver';

const routes: Routes = [
    {
        path: 'overview',
        component: OverviewComponent,
        resolve: {
            competitors: CompetitorResolver
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AnalyticsRoutingModule { }

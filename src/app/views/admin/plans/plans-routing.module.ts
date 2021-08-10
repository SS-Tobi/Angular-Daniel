import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewComponent} from "./view/view.component";
import {AddComponent} from "./add/add.component";
import {EditComponent} from "./edit/edit.component";
import {PlansResolver} from "../../../shared/services/plans/plans.resolver";
import {SinglePlanResolver} from "../../../shared/services/plans/single-plan.resolver";

const routes: Routes = [
    {
        path: '',
        pathMatch:' full',
        redirectTo: 'view'
    },
    {
        path: 'view',
        component: ViewComponent,
        resolve: {
            plans: PlansResolver
        }
    },
    {
        path: 'add',
        component: AddComponent
    },
    {
        path: 'edit/:id',
        component: EditComponent,
        resolve: {
            data: SinglePlanResolver
        }
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PlansRoutingModule { }

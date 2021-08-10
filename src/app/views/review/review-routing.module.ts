import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";
import {SettingComponent} from "./setting/setting.component";
import {ReviewSettingsResolverService} from "../../shared/services/web/review-settings.resolver.service";

const routes: Routes = [
    {
        path: 'overview',
        component: OverviewComponent
    },
    {
        path: 'settings',
        component: SettingComponent,
        resolve: {
            setting: ReviewSettingsResolverService
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReviewRoutingModule { }

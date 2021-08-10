import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";
import {SettingComponent} from "./setting/setting.component";
import {SocialProfileResolver} from '../../shared/services/social/social-profile.resolver';

const routes: Routes = [
    {
        path: 'overview',
        component: OverviewComponent,
        resolve: {
            profiles: SocialProfileResolver
        }
    },
    {
        path: 'settings',
        component: SettingComponent,
        resolve: {
            profiles: SocialProfileResolver
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SocialRoutingModule { }

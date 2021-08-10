import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";
import {DomainsComponent} from "./domains/domains.component";
import {HostingComponent} from "./hosting/hosting.component";
import {AuthGaurd} from '../../shared/services/auth.gaurd';
import {DomainEditComponent} from "./domain-edit/domain-edit.component";

import {SettingComponent} from '../web/setting/setting.component';
import {AnalyticsOverviewResolverService} from '../../shared/services/web/analytics-overview.resolver.service';
import {DomainResolverService} from '../../shared/services/web/domain.resolver.service';
import {SettingsResolverService} from '../../shared/services/web/settings.resolver.service';
import {WebSettingsResolverService} from "../../shared/services/web/web-settings.resolver.service";


const routes: Routes = [
    {
        path: 'overview',
        component: OverviewComponent,
        canActivate: [AuthGaurd],
        resolve: {
            overview: AnalyticsOverviewResolverService
        }
    },
    {
        path: 'domains',
        component: DomainsComponent,
        canActivate: [AuthGaurd]
    },
    {
        path: 'domain-edit/:id',
        component: DomainEditComponent,
        canActivate: [AuthGaurd],
        resolve:{
            domain: DomainResolverService
        }
    },
    {
        path: 'hosting',
        component: HostingComponent,
        canActivate: [AuthGaurd]
    },
    {
        path: 'settings',
        component: SettingComponent,
        canActivate: [AuthGaurd],
        resolve: {
            setting: WebSettingsResolverService
        },
        data:{type:'analytics'}
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WebRoutingModule { }

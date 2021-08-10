import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboadDefaultComponent } from './dashboad-default/dashboad-default.component';
import {AuthGaurd} from '../../shared/services/auth.gaurd';
import {AnalyticsOverviewResolverService} from '../../shared/services/web/analytics-overview.resolver.service';
import {SocialProfileResolver} from '../../shared/services/social/social-profile.resolver';
import {CompetitorResolver} from '../../shared/services/competitor.resolver';


const routes: Routes = [
  {
    path: 'overview',
    component: DashboadDefaultComponent,
    canActivate: [AuthGaurd],
    resolve: {
      overview: AnalyticsOverviewResolverService,
      profiles: SocialProfileResolver,
      competitors: CompetitorResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

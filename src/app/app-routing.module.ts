import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './shared/components/layouts/blank-layout/blank-layout.component';
import { AdminLayoutSidebarLargeComponent } from './shared/components/layouts/admin-layout-sidebar-large/admin-layout-sidebar-large.component';
import { DragDropModule} from "@angular/cdk/drag-drop";
import {SettingsResolverService} from "./shared/services/web/settings.resolver.service";
import {IsAdminGuard} from "./shared/services/web/is-admin.guard";
import {OnboardingComponent} from "./views/onboarding/onboarding.component";
import {IsStaffGuard} from "./shared/services/web/is-staff.guard";
import {PaymentComponent} from "./views/payment/payment.component";
import {ActiveplanGuard} from "./shared/services/activeplan.guard";

const adminRoutes: Routes = [
    {
      path: 'dashboard',
      loadChildren: './views/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'web',
        loadChildren: './views/web/web.module#WebModule'
    },
    {
        path: 'social',
        loadChildren: './views/social/social.module#SocialModule'
    },
    {
        path: 'review',
        loadChildren: './views/review/review.module#ReviewModule'
    },
    {
        path: 'analytics',
        loadChildren: './views/analytics/analytics.module#AnalyticsModule'
    },
    {
        path: 'competitor',
        loadChildren: './views/competitor/competitor.module#CompetitorModule'
    },
    {
        path: 'support',
        loadChildren: './views/support/support.module#SupportModule'
    },
    {
        path: 'profile',
        loadChildren: './views/profile/profile.module#ProfileModule'
    },
    {
        path: 'admin',
        loadChildren: './views/admin/admin.module#AdminModule',
        canActivate: [IsAdminGuard]
    },
    {
        path: 'staff',
        loadChildren: './views/staff/staff.module#StaffModule',
        canActivate: [IsStaffGuard]
    },
  ];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/overview',
    pathMatch: 'full',
  },
    {
        path: '',
        component: OnboardingComponent,
        children: [
            {
                path: 'onboarding',
                loadChildren: './views/onboarding/on-boarding.module#OnBoardingModule'
            },
        ]
    },
    {
        path: '',
        component: PaymentComponent,
        children: [
            {
                path: 'payment',
                loadChildren: './views/payment/payment.module#PaymentModule'
            },
        ]
    },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
        {
            path: 'sessions',
            loadChildren: './views/sessions/sessions.module#SessionsModule'
        },
        {
            path: 'site',
            loadChildren: './views/site/site.module#SiteModule'
        },
    ]
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'others',
        loadChildren: './views/others/others.module#OthersModule'
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutSidebarLargeComponent,
    children: adminRoutes,
      resolve: {
          navigation: SettingsResolverService
      },
      canActivate: [ActiveplanGuard]
  },
  {
    path: '**',
    redirectTo: 'others/404'
  }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes, { useHash: true }),
      DragDropModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

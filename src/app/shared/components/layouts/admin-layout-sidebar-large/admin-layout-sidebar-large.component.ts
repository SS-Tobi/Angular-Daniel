import { Component, OnInit, ViewChild } from '@angular/core';
import {IMenuItem, NavigationService} from '../../../services/navigation.service';
import { SearchService } from 'src/app/shared/services/search.service';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import {
    Router,
    RouteConfigLoadStart,
    ResolveStart,
    RouteConfigLoadEnd,
    ResolveEnd,
    ActivatedRoute
} from '@angular/router';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import {BehaviorSubject} from "rxjs";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-admin-layout-sidebar-large',
  templateUrl: './admin-layout-sidebar-large.component.html',
  styleUrls: ['./admin-layout-sidebar-large.component.scss']
})
export class AdminLayoutSidebarLargeComponent implements OnInit {

    moduleLoading: boolean;
    @ViewChild(PerfectScrollbarDirective) perfectScrollbar: PerfectScrollbarDirective;
  
    constructor(
      public navService: NavigationService,
      public searchService: SearchService,
      private router: Router,
      private route: ActivatedRoute,
      public auth: AuthService,
    ) { }
  
    ngOnInit() {
        if(this.route.snapshot.data.navigation.data)
        {
            this.navService.publishNavigationChange(this.route.snapshot.data.navigation.data.nav);
        }else{
            this.navService.publishNavigationChange(this.navService.defaultMenu);
        }

        /*if(this.auth.isStaff()){
            this.navService.publishNavigationChange(this.navService.defaultMenu);
        }*/

        /*if(this.route.snapshot.data.navigation.data)
        {
            this.navService.publishNavigationChange(this.route.snapshot.data.navigation.data.nav);
        }else{
            this.navService.publishNavigationChange(this.navService.defaultMenu);
        }*/

      this.router.events.subscribe(event => {
        if (event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
          this.moduleLoading = true;
        }
        if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
          this.moduleLoading = false;
        }
      });
    }

}

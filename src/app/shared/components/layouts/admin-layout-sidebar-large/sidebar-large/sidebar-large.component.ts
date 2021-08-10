import { Component, OnInit, HostListener } from '@angular/core';
import { NavigationService, IMenuItem, IChildItem } from '../../../../services/navigation.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Utils } from '../../../../utils';
import {CdkDragDrop, CdkDragStart, moveItemInArray} from "@angular/cdk/drag-drop";
import {SettingsService} from "../../../../services/settings.service";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../../../services/auth.service";

@Component({
  selector: 'app-sidebar-large',
  templateUrl: './sidebar-large.component.html',
  styleUrls: ['./sidebar-large.component.scss']
})
export class SidebarLargeComponent implements OnInit {

    selectedItem: IMenuItem;

	nav: IMenuItem[];

	constructor(
		public router: Router,
		public navService: NavigationService,
		public factory: SettingsService,
		public toastr: ToastrService,
		public auth: AuthService,



	) { }

	ngOnInit() {
		console.log("Sidebar componenet large");
		this.updateSidebar();
		// CLOSE SIDENAV ON ROUTE CHANGE
		this.router.events.pipe(filter(event => event instanceof NavigationEnd))
			.subscribe((routeChange) => {
				this.closeChildNav();
				if (Utils.isMobile()) {
					this.navService.sidebarState.sidenavOpen = false;
				}
			});

		this.navService.menuItems$
			.subscribe((items) => {
                this.nav = items;
				this.setActiveFlag();
			});
	}

	selectItem(item) {
		this.navService.sidebarState.childnavOpen = true;
		this.selectedItem = item;
		this.setActiveMainItem(item);
	}
	closeChildNav() {
		this.navService.sidebarState.childnavOpen = false;
		this.setActiveFlag();
	}

	onClickChangeActiveFlag(item) {
		this.setActiveMainItem(item);
	}
	setActiveMainItem(item) {
		this.nav.forEach(item => {
			item.active = false;
		});
		item.active = true;
	}

	setActiveFlag() {
		if (window && window.location) {
            const activeRoute = window.location.hash || window.location.pathname;
			this.nav.forEach(item => {
				item.active = false;
				if (activeRoute.indexOf(item.state) !== -1) {
                    this.selectedItem = item;
					item.active = true;
				}
				if (item.sub) {
					item.sub.forEach(subItem => {
                        subItem.active = false;
						if (activeRoute.indexOf(subItem.state) !== -1) {
                            this.selectedItem = item;
                            item.active = true;
                        }
                        if (subItem.sub) {
                            subItem.sub.forEach(subChildItem => {
                                if (activeRoute.indexOf(subChildItem.state) !== -1) {
                                    this.selectedItem = item;
                                    item.active = true;
                                    subItem.active = true;
                                }
                            });
                        }
					});
				}
            });
		}
    }
		public isDragging;
	dragStarted(event: CdkDragStart) {


		this.isDragging = false;
	}

	updateSidebar() {
		if (Utils.isMobile()) {
			this.navService.sidebarState.sidenavOpen = false;
			this.navService.sidebarState.childnavOpen = false;
		} else {
			this.navService.sidebarState.sidenavOpen = true;
		}
	}

	elgible(name){
		if(name=="Dashboard"){
			return true;
		}
		else{
			return false;
		}
	}

	drop(event: CdkDragDrop<string[]>) {
		if(event.currentIndex==0){
			event.currentIndex=event.previousIndex;
		}
		moveItemInArray(this.nav, event.previousIndex, event.currentIndex)

		console.log(Object.assign({},this.nav), 'this is navigation object');

		let navType = "user_navigation";
		if(this.auth.isAdmin()){
			navType = "admin_navigation";
		}else if(this.auth.isStaff()){
			navType = "staff_navigation";
		}

		this.factory.updateSettings(navType,
			{nav:this.nav}
		).subscribe((res)=>{

		},(err)=>{
			this.toastr.error('Failed to update settings. Please try again',
				'Request failed');
		});




		let data=this.factory.getSetting(navType).subscribe((res)=>{
				console.log(res);
				console.log('update response');
			}, (err)=>{
				console.log(err);
				console.log('update fail');
			}
		);


	}

	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this.updateSidebar();
    }

    removeSidebarClass() {
		const state = this.navService.sidebarState;
		return state.childnavOpen = false;
    }
}

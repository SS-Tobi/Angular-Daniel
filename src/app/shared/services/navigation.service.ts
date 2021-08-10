import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {AuthService} from "./auth.service";
import {SettingsService} from "./settings.service";

export interface IMenuItem {
    id?: string;
    title?: string;
    description?: string;
    type: string;       // Possible values: link/dropDown/extLink
    name?: string;      // Used as display text for item and title for separator type
    state?: string;     // Router state
    icon?: string;      // Material icon name
    tooltip?: string;   // Tooltip text
    disabled?: boolean; // If true, item will not be appeared in sidenav.
    sub?: IChildItem[]; // Dropdown items
    badges?: IBadge[];
    active?: boolean;
}
export interface IChildItem {
    id?: string;
    parentId?: string;
    type?: string;
    name: string;       // Display text
    state?: string;     // Router state
    icon?: string;
    sub?: IChildItem[];
    active?: boolean;
}

interface IBadge {
    color: string;      // primary/accent/warn/hex color codes(#fff000)
    value: string;      // Display text
}

interface ISidebarState {
    sidenavOpen?: boolean;
    childnavOpen?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    public sidebarState: ISidebarState = {
        sidenavOpen: true,
        childnavOpen: false
    };

    defaultMenu: IMenuItem[] = [];

    defaultUserMenu = [
        {
            name: 'Dashboard',
            type: 'link',
            icon: 'i-Bar-Chart',
            state: '/dashboard/overview'
        },
        {
            name: 'Web',
            type: 'dropDown',
            icon: 'i-Internet',
            sub: [
                { name: 'Overview', state: '/web/overview', type: 'link' },
                { name: 'Domains', state: '/web/domains', type: 'link' },
                { name: 'Hosting', state: '/web/hosting', type: 'link' },
                { name: 'Analytics', state: '/web/settings', type: 'link' },
            ]
        },
        {
            name: 'Social Media',
            type: 'dropDown',
            icon: 'i-Cube-Molecule-2',
            sub: [
                { name: 'Overview', state: '/social/overview', type: 'link' },
                { name: 'Settings', state: '/social/settings', type: 'link' },
            ]
        },
        {
            name: 'Review',
            type: 'dropDown',
            icon: 'i-Library',
            sub: [
                { name: 'Overview', state: '/review/overview', type: 'link' },
                { name: 'Settings', state: '/review/settings', type: 'link' },
            ]
        },
        {
            name: 'Analysis',
            type: 'dropDown',
            icon: 'i-Atom',
            sub: [
                { name: 'Overview', state: '/analytics/overview', type: 'link' },
                { name: 'Settings', state: '/competitor/view', type: 'link' },
            ]
        },
        {
            name: 'Support',
            type: 'dropDown',
            icon: 'i-Support',
            sub: [
                { name: 'New Case', state: '/support/new-case', type: 'link' },
                { name: 'Inbox', state: '/support/inbox', type: 'link' },
            ]
        },
        {
            name: 'Profile',
            type: 'dropDown',
            icon: 'i-Administrator',
            sub: [
                { name: 'My Account', state: '/profile', type: 'link' },
            ]
        },

    ];

    constructor(
        private authService: AuthService,
        public factory: SettingsService,
        public auth: AuthService,
    ) {
        this.updateDefaultMenuVar();
    }


    updateDefaultMenuVar(){
        if(this.auth.checkAuth()){
            if(this.authService.isAdmin()){
                //if admin this menu
                this.defaultMenu = [
                    {
                        name: 'Dashboard',
                        type: 'link',
                        icon: 'i-Bar-Chart',
                        state: '/admin/dashboard'
                    },
                    {
                        name: 'Users',
                        type: 'dropDown',
                        icon: 'i-Business-Mens',
                        sub: [
                            { name: 'Users', state: '/admin/users', type: 'link' },
                            { name: 'Staff', state: '/admin/staff', type: 'link' },
                        ]
                    },
                    {
                        name: 'Plans',
                        type: 'link',
                        icon: 'i-Money1',
                        state: '/admin/plans'
                    },
                    {
                        name: 'Domains',
                        type: 'link',
                        icon: 'i-Internet',
                        state: '/admin/domains'
                    },
                    {
                        name: 'Hosting',
                        type: 'link',
                        icon: 'i-Split-Horizontal-2-Window',
                        state: '/admin/hosting'
                    },
                    {
                        name: 'Competitors',
                        type: 'link',
                        icon: 'i-Atom',
                        state: '/admin/competitors'
                    },
                    {
                        name: 'Tickets',
                        type: 'link',
                        icon: 'i-Support',
                        state: '/admin/tickets'
                    },
                    {
                        name: 'Profile',
                        type: 'link',
                        icon: 'i-Administrator',
                        state: '/profile'
                    },

                ];
            }else if(this.authService.isStaff()){
                //if staff
                this.defaultMenu = [
                    {
                        name: 'Dashboard',
                        type: 'link',
                        icon: 'i-Bar-Chart',
                        state: '/staff/dashboard'
                    },
                    {
                        name: 'Customers',
                        type: 'link',
                        icon: 'i-Business-Mens',
                        state: '/staff/users'
                    },
                    {
                        name: 'Domains',
                        type: 'link',
                        icon: 'i-Internet',
                        state: '/staff/domains'
                    },
                    {
                        name: 'Tickets',
                        type: 'link',
                        icon: 'i-Support',
                        state: '/staff/tickets'
                    },
                    {
                        name: 'Profile',
                        type: 'link',
                        icon: 'i-Administrator',
                        state: '/profile'
                    },

                ];
            }
            else{
                //if other users
                this.defaultMenu = this.defaultUserMenu;
            }
        }else{
            this.defaultMenu = this.defaultUserMenu;
        }
    }

    // sets iconMenu as default;
    menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu);
    // navigation component has subscribed to this Observable
    menuItems$ = this.menuItems.asObservable();


    publishNavigationChange(updatedMenu) {
          this.menuItems.next(updatedMenu);
          //this.forceUpdateNavigation(updatedMenu);
    }

    refreshMenu(){
        let navType = this.getNavType();
        this.factory.getSetting(navType).subscribe(
        res=>{
                if(res.status=="success") {
                    console.log(res);
                    this.menuItems.next(res);
                    console.log('menu refreshed');
                }else{
                    this.updateDefaultMenuVar();
                    this.menuItems.next(this.defaultMenu);
                    console.log('default menu showed');
                }
            }
        );
    }

    forceUpdateNavigation(updatedMenu){
        let navType = this.getNavType();

        this.factory.updateSettings(navType,
            {nav:updatedMenu}
        ).subscribe((res)=>{
            this.menuItems.next(updatedMenu);
        });
    }

    getNavType(){
        let navType = "user_navigation";
        if(this.auth.isAdmin()){
            navType = "admin_navigation";
        }else if(this.auth.isStaff()){
            navType = "staff_navigation";
        }
        return navType;
    }

}

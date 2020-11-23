import {Component, ElementRef, OnInit} from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';
import {AlertService} from '../service/alert.service';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../service/user.service';

declare const $: any;

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    //ab: string;
    type?: string;
}

export const ROUTES: RouteInfo[] = [{
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'dashboard'
    },
    {
    path: '/users',
    title: 'Users',
    type: 'link',
    icontype: 'person'
    },
    {
        path: '/drivers',
        title: 'Drivers',
        type: 'sub',
        icontype: 'view_list',
        collapse: 'creator',
        children: [
            {path: 'list', title: 'List'},
            {path: 'add', title: 'Add'},]
    },
    {
        path: '/suppliers',
        title: 'suppliers',
        type: 'sub',
        icontype: 'payment',
        collapse: 'advertiser',
        children: [
            {path: 'list', title: 'List'},
            {path: 'add', title: 'Add'},]
    }
];
@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ps: any;
    user: any = {};
    name: string;
    authenticationservice: any;
    toastr: any;
    router: any;

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
            this.ps = new PerfectScrollbar(elemSidebar);
        }
         this.user = JSON.parse(localStorage.getItem('user'));
        // this.name = this.user['firstname'] + ' ' + this.user['lastname'];
       // console.log(JSON.stringify(this.user));
    }
    updatePS(): void  {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            this.ps.update();
        }
    }
    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }

    logout() {
        this.authenticationservice.logout().subscribe(res => {
          this.toastr.success(res.message, 'Success');
          localStorage.removeItem('user');
         //  localStorage.removeItem('prfl');
          this.router.navigate(['/']);
        });
      }
}



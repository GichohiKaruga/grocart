import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {AuthenticationService} from '../../service/authentication.service';
import {AlertService} from '../../service/alert.service';
import { ToastrService } from 'ngx-toastr';

declare var $: any;

@Component({
    selector: 'app-login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit, OnDestroy {
    // test: Date = new Date();
    private toggleButton: any;
    private sidebarVisible: boolean;
    private nativeElement: Node;
    public user: any = {};
    public res: any = {};
    private username: string;
    private password: string;
    private loading = false;
    private submitted = false;
    flashMsg: boolean;

    constructor(private element: ElementRef,
                public router: Router,
                public authenticationService: AuthenticationService,
                private toastr: ToastrService,
                private alertService: AlertService) {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }

    ngOnInit() {
        this.loading = true;
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        body.classList.add('off-canvas-sidebar');
        const card = document.getElementsByClassName('card')[0];
        setTimeout(function() {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);
    }
    sidebarToggle() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        const sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function() {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
    ngOnDestroy(){
      const body = document.getElementsByTagName('body')[0];
      body.classList.remove('login-page');
      body.classList.remove('off-canvas-sidebar');
    }


    login() {
        this.submitted = true;
        this.loading = true;

        this.authenticationService.login(this.user.username, this.user.password)
            .pipe(first())
            .subscribe(
                data => {
                    console.log('Name: ' + this.user.username + ' Pass:  ' + this.user.password);
                    this.router.navigate(['/dashboard']);
                    if ( data.data ) { this.toastr.success(`You are logged in as ${data.data.first_name} 
                    ${data.data.last_name}`); }
                },
                error => {
                    console.log('Error' + error);
                    this.alertService.error(error);
                    this.loading = false;
                });
                 this.flashMsg = !this.flashMsg;
      this.hideFlashMsg();
    }
    hideFlashMsg() {
        throw new Error("Method not implemented.");
    }

    logout() {
        localStorage.removeItem('currentUser');
        

    }
}

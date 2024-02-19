import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    loggedUserName = '';
    loggedUserId = '';

    constructor(private translate: TranslateService, public router: Router) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.loggedUserName = localStorage.getItem('loggedUsername');
        this.loggedUserId = localStorage.getItem('loggedUserId');
    }
    
    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        if(confirm("Are you sure you want to log out?")){
            localStorage.setItem('isLoggedin', 'false');
            this.router.navigateByUrl('/login');
        }
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {
    constructor(public router: Router) { }
    isLoggedin = localStorage.getItem('isLoggedin');
    loggedUserType = localStorage.getItem('loggedUsertype');
    loggedUserBranch = localStorage.getItem('loggedUserBranch');

    ngOnInit() {

        if(this.isLoggedin != 'true'){
            this.router.navigateByUrl('/login?invalid_access=1');
        } else {
            if(this.router.url == "/" || this.router.url == null){
                this.router.navigateByUrl('/booking');
            }
        }
    }
}

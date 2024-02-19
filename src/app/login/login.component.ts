import { Component, OnInit  } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Router } from '@angular/router';
import { EmailValidator } from '@angular/forms';
import { UserService } from '../shared';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()],
    providers: [EmailValidator]
})

export class LoginComponent implements OnInit {

    emailAddress: string;
    password: string;
    loading: boolean = false;
    loggedUserType: string = ""; 
    loggedUserName: string = ""; 
    loggedUserId: string = "";
    loggedUserBranch: string = "";
    private alerts: Array<any> = [];

    constructor(public router: Router, private userService: UserService) {}

    ngOnInit() {
        localStorage.setItem('isLoggedin', 'false');
        localStorage.setItem('loggedUsername', '');
        localStorage.setItem('loggedUsertype', '');
        localStorage.setItem('loggedUserId', '');
        localStorage.setItem('loggedUserBranch', '');
    }

    public login() {
        this.closeActiveAlert();
        this.loading = true;

        this.userService.login(this.emailAddress, btoa(this.password)).subscribe(
            data => {
                if(!this.isEmpty(data)){
                  this.userService.setLoggedInUserId(data.userId);
                  this.userService.setLoggedInUserType(data.role);

                  if(data.userBranch != null){
                    this.userService.setLoggedInBranch(data.userBranch.branchId);
                  }
                  
                  
                  if(data.firstName == "" && data.lastName == ""){
                      this.userService.setLoggedInUserName(data.email, '');
                  } else {
                      this.userService.setLoggedInUserName(data.firstName, data.lastName);
                  }

                  this.loggedUserId = this.userService.getLoggedInUserId();
                  this.loggedUserName = this.userService.getLoggedInUserName();
                  this.loggedUserType = this.userService.getLoggedInUserType();
                  this.loggedUserBranch = this.userService.getLoggedInUserBranch();

                  this.successMessage('Log in successful. Please wait...');
                  this.loading = false;

                  localStorage.setItem('isLoggedin', 'true');
                  localStorage.setItem('loggedUsername', this.loggedUserName);
                  localStorage.setItem('loggedUsertype', this.loggedUserType);
                  localStorage.setItem('loggedUserId', this.loggedUserId);
                  localStorage.setItem('loggedUserBranch', this.loggedUserBranch);
      
                  setTimeout(()=>{
                      //this.closeActiveAlert();
                      this.router.navigateByUrl('/booking');
                      /**
                      if(this.loggedUserType == "ADMIN"){
                          this.router.navigate(['/booking']);
                      } else if(this.loggedUserType == "EDITOR" || this.loggedUserType == "PHOTOGRAPHER"){
                          this.router.navigate(['/photos']);  
                      }
                      */
                  }, 2000);
                }
        }, err => {
          console.log(err);  
          this.loading = false;
          let errMsg = JSON.parse(err._body);
          this.errMessage(errMsg.message.toLocaleString());
          return false;              
        });
    }

    private errMessage(msg){
        this.closeActiveAlert();
        this.alerts.push({
          id: 1,
          type: 'danger',
          message: msg
        });
        
        return false;
      }
    
      private successMessage(msg){
        this.closeActiveAlert();
        
        setTimeout(()=>{
          this.alerts.push({
            id: 1,
            type: 'success',
            message: msg
          });
        }, 500);
        
        return true;
      }
    
      private closeAlert(alert: any) {    
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
      }
    
      private closeActiveAlert(){
        this.alerts.splice(0, 1);
      }
    
      private isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
      }
}

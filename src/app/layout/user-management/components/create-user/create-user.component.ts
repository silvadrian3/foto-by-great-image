import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import {Router } from '@angular/router';
import { UserManagementService } from '../../../user-management/services/user-management.service';
import { BranchesService } from '../../../branches/services/branches.service';
import { LayoutService } from '../../../layout.service';
import { userDetailsDto } from '../../../user-management/model/user-management.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['../../../layout.component.scss', './create-user.component.css'],
  animations: [routerTransition()],
  encapsulation: ViewEncapsulation.None
})
export class CreateUserComponent implements OnInit {
  errorMessage: string = "Unexpected error encountered.";
  userDetails: userDetailsDto = new userDetailsDto;
  firstname: string;
  lastname: string;
  emailaddress: string;
  usertype: string = '';
  //dateOfBirthUI: any = [];
  username: string = '';
  password: string = '';
  contactnumber: string = '';
  opt_branch: any [];
  branch: string = '';
  isSubmitted: boolean = false;

  private alerts: Array<any> = [];

  constructor(
    private userManagementService:UserManagementService,
    private branchesService:BranchesService,
    private layoutService:LayoutService,
    private modalService: NgbModal,     
    private router: Router) { }

  ngOnInit() { 
    this.getBranches();
  }

  private getBranches(){
    this.branchesService.getBranches().subscribe(
      data => {
        this.opt_branch = data;
      }, err => {
        console.log(err)
    });
  }

  private createUser(){

    // if(this.dateOfBirthUI.length != 0){
    //   let datePipe = new DatePipe("en-US"),
    //   d = this.dateOfBirthUI.date.day,
    //   m = this.dateOfBirthUI.date.month,
    //   y = this.dateOfBirthUI.date.year;
      
    //   this.dateOfBirth = datePipe.transform(y + '-' + m + '-' + d, 'y-MM-dd');
    // }
  
    // this.userDetails.firstname = this.firstname;
    // this.userDetails.lastname = this.lastname ;
    // this.userDetails.email = this.emailaddress;
    // this.userDetails.usertype = this.usertype;
    // this.userDetails.username = this.username;
    // this.userDetails.password = btoa(this.password);
    // this.userDetails.mobileNumber = this.contactnumber;
    // this.userDetails.role = this.usertype;
    // this.userDetails.status = "ACTIVE";


    let param = [];
  
    param.push({
      "firstName":this.firstname,
      "lastName":this.lastname, 
      "email":this.emailaddress,
      "password":btoa(this.password),
      "role":this.usertype
    });

    this.saveUser(param[0]);
      
  }

  private saveUser(userDetails){
    this.isSubmitted = true;
    this.userManagementService.createUser(userDetails).subscribe(
      data => {
        if(!this.isEmpty(data)){

            if(this.branch != "" && this.branch != undefined){
              var user_id = data.userId,
                branch_id = this.branch;

                this.saveBranchUser(user_id, branch_id);

            } else {
              this.processCompletedSuccessfully();
            }

          
          
        } else {
          this.errMessage(this.errorMessage);
        }
      }, err => {
        console.log(err)
    });    
  }

  private saveBranchUser(user_id, branch_id){
    this.userManagementService.createBranchUser(user_id, branch_id).subscribe(
      data => {
        
        if(!this.isEmpty(data)){
          this.processCompletedSuccessfully();
        }
      }, err => {
          console.log(err)
      }
    );
  }


  public processCompletedSuccessfully(){
    this.successMessage('User successfully added.');

    setTimeout(()=>{
      this.closeActiveAlert();
      this.router.navigateByUrl('user-management');  
    }, 3000);
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

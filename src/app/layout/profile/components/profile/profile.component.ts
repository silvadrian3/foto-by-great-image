import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ProfileService } from '../../../profile/services/profile.service';
import { LayoutService } from '../../../layout.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../../../layout.component.scss', './profile.component.css'],
  animations: [routerTransition()],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  loading: boolean = false;
  errorMessage: string = "Unexpected error encountered.";
  //userDetails: userDetailsDto = new userDetailsDto;
  selectedUserId: string;
  firstname: string;
  lastname: string;
  emailaddress: string;
  //usertype: string = '';
  contactnumber: string = '';

  private alerts: Array<any> = [];

  constructor(
    private profileService:ProfileService, 
    private layoutService:LayoutService, 
    private modalService: NgbModal, 
    private activatedRoute: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    this.loading = true;
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.selectedUserId = params['id'];
      this.readUsers(this.selectedUserId);
    });

  }

  private readUsers(selectedUserId){
    this.profileService.readUsers(selectedUserId).subscribe(
      data => {

        console.log(data);
        
        this.firstname = data.firstName;
        this.lastname = data.lastName;
        this.emailaddress = data.email;
        //this.usertype = data.role;
        this.contactnumber = data.mobileNumber;
        
        // if(data.results[0].records[0].birthday != "" && data.results[0].records[0].birthday != null){
        //   let datePipe = new DatePipe("en-US"),
        //     dateOfBirth = data.results[0].records[0].birthday,
        //     d = datePipe.transform(dateOfBirth, 'dd'),
        //     m = datePipe.transform(dateOfBirth, 'M'),
        //     y = datePipe.transform(dateOfBirth, 'yyyy');
          
        //   this.dateOfBirthUI = {date: { year: y, month: m, day: d }};
        // }
        this.loading = false;
          
      }, err => {
        console.log(err)
    });
  }

  private updateUser(){
    let param = [];

    param.push({
      "firstName": this.firstname,
      "lastName": this.lastname,
      "email":this.emailaddress,
      "mobileNumber":this.contactnumber
    });

    this.saveUser(param[0]);
  }

  private saveUser(userDetails){
    this.profileService.updateUser(userDetails, this.selectedUserId).subscribe(
      data => {
        if(!this.isEmpty(data)){
          this.successMessage('Profile successfully updated.');

          setTimeout(()=>{
            this.closeActiveAlert();
            this.router.navigateByUrl('profile?id=' + this.selectedUserId);  
          }, 3000);
          
        } else {
          this.errMessage(this.errorMessage);
        }
        
      }, err => {
        console.log(err)
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

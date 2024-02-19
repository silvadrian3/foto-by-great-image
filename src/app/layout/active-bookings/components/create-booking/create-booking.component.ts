import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import {Router} from '@angular/router';
import { ActiveBookingsService } from '../../../active-bookings/services/active-bookings.service';
import { BranchesService } from '../../../branches/services/branches.service';
import { ServicesService } from '../../../services/services/services.service';
import { LayoutService } from '../../../layout.service';
import { BookingDto } from '../../../active-bookings/model/active-bookings.model';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
//import { LayoutComponent } from '../../../layout.component';
import { DatePicker } from 'angular2-datetimepicker';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['../../../layout.component.scss', './create-booking.component.css'],
  animations: [routerTransition()],
  encapsulation: ViewEncapsulation.None
})
export class CreateBookingComponent implements OnInit {
  errorMessage: string = "Unexpected error encountered.";
  bookingDetails: BookingDto = new BookingDto;
  opt_services: any [];
  serviceType: string = '';
  opt_branch: any [];
  opt_packages: any [] = [];
  servicePackage: string = '';
  hasBranch: boolean = false;
  branch: string = '';
  customerEmail: string = '';
  isSubmitted: boolean = false;
  loggedUserBranch: string = localStorage.getItem('loggedUserBranch');

  appointmentDateTime: Date = new Date();
  //appointmentDateTime: '2019-07-10';
  
  appointmentDateTimeSettings = {
    bigBanner: true,
    timePicker: true,
    format: 'dd MMM yyyy hh:mm a',
    defaultOpen: false,
    closeOnSelect: true
  }
  location: string = '';
  private alerts: Array<any> = [];

  constructor(
    private activeBookingsService:ActiveBookingsService,
    private branchesService:BranchesService,
    private servicesService:ServicesService, 
    private layoutService:LayoutService,
    private modalService: NgbModal,     
    private router: Router,
    private elem: ElementRef) { 

      ///place this in your constructor
      DatePicker.prototype.ngOnInit = function() {
        this.settings = Object.assign(this.defaultSettings, this.settings);
        if (this.settings.defaultOpen) {
        this.popover = true;
        }
        this.date = new Date(); 

        //this.timeViewMeridian = "button";

      };

      

    }



  ngOnInit() {

    let elements = this.elem.nativeElement.querySelectorAll('.time-view .meridian .cuppa-btn-group .button');
      elements.forEach(element => {
      element.type = "button";
    });
      
    this.elem.nativeElement.querySelector('.time-view .time-view-btn .button').type = "button";

    this.getServices();

    if(this.loggedUserBranch != 'null' && this.loggedUserBranch != 'undefined'){
     console.log('branch id: ',this.loggedUserBranch);
      this.readBranch(this.loggedUserBranch);
      this.hasBranch = true;

    } else {
      this.getBranches();
      this.hasBranch = false;
    }

  }

  private getServices(){
    
    this.servicesService.getServices('studio').subscribe(
      data => {

        console.log(data);
        this.opt_services = data;
      }, err => {
        console.log(err)
    });
  }

  private getBranches(){
    this.branchesService.getBranches().subscribe(
      data => {
        this.opt_branch = data;
      }, err => {
        console.log(err)
    });
  }

  private readBranch(selectedBranchId){
    this.branchesService.readBranch(selectedBranchId).subscribe(
      data => {
          var fullAddress = '';
          fullAddress += data.address.address1 + ' ';
          fullAddress += data.address.address2 + ' ';
          fullAddress += data.address.city + ' ';
          fullAddress += data.address.state;

          this.location = fullAddress;
          this.branch = selectedBranchId;
          
      }, err => {
        console.log(err)
    });
  }

  private onServicesChange(){
    this.servicesService.readService(this.serviceType).subscribe(
      data => {
        if(data != undefined){
          if(!this.isEmpty(data.servicePackages)){
            this.opt_packages = data.servicePackages;
          }
        }
      });
  }

  private onBranchChange(){
    for(var x=0; x < this.opt_branch.length; x++){
      if(this.opt_branch[x].branchId == this.branch){

        var fullAddress = '';
        fullAddress += this.opt_branch[x].address.address1 + ' ';
        fullAddress += this.opt_branch[x].address.address2 + ' ';
        fullAddress += this.opt_branch[x].address.city + ' ';
        fullAddress += this.opt_branch[x].address.state;
        this.location = fullAddress;
        return false;
      }
    }
}

  private createBooking(){
    let datePipe = new DatePipe("en-US"),
      param = [];
      
    param.push({
      "bookingTypeId":this.serviceType,
      "customerEmail": this.customerEmail,
      "dateTime": datePipe.transform(this.appointmentDateTime, 'y-MM-ddTHH:mm:ss'),
      "location": this.location,
      "branchId": this.branch,
      "packageId": this.servicePackage
    });
    
    this.saveBooking(param[0]);   
    //console.log(param);
  }

  private saveBooking(bookingDetails){
    this.isSubmitted = true;
    this.activeBookingsService.createBooking(bookingDetails).subscribe(
      data => {

        if(!this.isEmpty(data)){
          this.successMessage('Booking successfully added.');

          setTimeout(()=>{
            this.closeActiveAlert();
            this.router.navigateByUrl('booking'); 
          }, 3000);
          
        } else {
          this.errMessage(this.errorMessage);
        }
      }, err => {
        console.log(err)
        this.errMessage(this.errorMessage);
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





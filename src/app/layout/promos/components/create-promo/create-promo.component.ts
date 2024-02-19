import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import {Router} from '@angular/router';
import { PromosService } from '../../../promos/services/promos.service';
import { LayoutService } from '../../../layout.service';
import { promosDetailsDto } from '../../../promos/model/promos.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { DatePicker } from 'angular2-datetimepicker';

@Component({
  selector: 'app-create-promo',
  templateUrl: './create-promo.component.html',
  styleUrls: ['../../../layout.component.scss', './create-promo.component.css'],
  animations: [routerTransition()],
  encapsulation: ViewEncapsulation.None
})
export class CreatePromoComponent implements OnInit {
  errorMessage: string = "Unexpected error encountered.";
  promosDetails: promosDetailsDto = new promosDetailsDto;
  code: string = '';
  discount: number;
  description: string = '';
  private alerts: Array<any> = [];
  isActive: boolean = false;
  expirationDateTime: Date = new Date();
  isSubmitted: boolean = false;
  
  expirationDateTimeSettings = {
    bigBanner: true,
    timePicker: true,
    format: 'dd MMM yyyy hh:mm a',
    defaultOpen: false,
    closeOnSelect: true
  }

  constructor(
    private promosService:PromosService,
    private layoutService:LayoutService,
    private modalService: NgbModal,     
    private router: Router,
    private elem: ElementRef) { 

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
  }

  private createPromo(){

    let datePipe = new DatePipe("en-US"),
      param = [];
  
    param.push({
      "active": this.isActive,
      "code": this.code,
      "description": this.description,
      "discountPercentage": this.discount,
      "expirationDateTime": datePipe.transform(this.expirationDateTime, 'y-MM-ddTHH:mm:ss')
    });

    //console.log(param);
    this.savePromo(param[0]);
      
  }

  private savePromo(promoDetails){
    this.isSubmitted = true;
    this.promosService.createPromo(promoDetails).subscribe(
      data => {
        console.log(data);
        if(!this.isEmpty(data)){
          this.successMessage('Promo successfully added.');

          setTimeout(()=>{
            this.closeActiveAlert();
            this.router.navigateByUrl('promos');  
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

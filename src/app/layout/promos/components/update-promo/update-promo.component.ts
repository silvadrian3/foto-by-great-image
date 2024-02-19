import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { PromosService } from '../../../promos/services/promos.service';
import { LayoutService } from '../../../layout.service';
import { promosDetailsDto } from '../../../promos/model/promos.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import {INgxMyDpOptions, IMyDateModel} from 'ngx-mydatepicker';
import { DatePipe } from '@angular/common';
import { DatePicker } from 'angular2-datetimepicker';

@Component({
  selector: 'app-update-promo',
  templateUrl: './update-promo.component.html',
  styleUrls: ['../../../layout.component.scss', './update-promo.component.css'],
  animations: [routerTransition()],
  encapsulation: ViewEncapsulation.None
})
export class UpdatePromoComponent implements OnInit {
  loading: boolean = false;
  errorMessage: string = "Unexpected error encountered.";
  promoDetails: promosDetailsDto = new promosDetailsDto;
  selectedPromoId: string;
  code: string = '';
  discount: number;
  description: string = '';
  isActive: boolean = false;
  private alerts: Array<any> = [];

  expirationDateTime: Date = new Date();
  //appointmentDateTime: '2019-07-10';
  
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
    private activatedRoute: ActivatedRoute, 
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

    this.loading = true;
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.selectedPromoId = params['id'];
      this.readPromo(this.selectedPromoId);
    });

  }

  private readPromo(selectedPromoId){
    this.promosService.readPromo(selectedPromoId).subscribe(
      data => {

        console.log(data);
        
        this.code = data.id;
        this.discount = data.discountPercentage;
        this.description = data.description;
        this.expirationDateTime = data.expirationDateTime;
        this.loading = false;
        this.isActive = data.active;
          
      }, err => {
        console.log(err)
    });
  }

  private updatePromo(){
    let datePipe = new DatePipe("en-US"),
      param = [];

    param.push({
      "active": this.isActive,
      "code": this.code,
      "description": this.description,
      "discountPercentage": this.discount,
      "expirationDateTime": datePipe.transform(this.expirationDateTime, 'y-MM-ddTHH:mm:ss')
    });

    this.savePromo(param[0]);
  }

  private savePromo(promoDetails){

    console.log(promoDetails);    
    this.promosService.updatePromos(promoDetails, this.selectedPromoId).subscribe(
      data => {
        if(!this.isEmpty(data)){

          console.log(data);
          this.successMessage('Promo successfully updated.');

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

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import {Router } from '@angular/router';
import { AddonsService } from '../../../addons/services/addons.service';
import { LayoutService } from '../../../layout.service';
import { addonsDetailsDto } from '../../../addons/model/addons.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-addons',
  templateUrl: './create-addons.component.html',
  styleUrls: ['../../../layout.component.scss', './create-addons.component.css'],
  animations: [routerTransition()],
  encapsulation: ViewEncapsulation.None
})
export class CreateAddonsComponent implements OnInit {
  errorMessage: string = "Unexpected error encountered.";
  addonstDetails: addonsDetailsDto = new addonsDetailsDto;
  selectedAddonsId: string;
  price: number;
  description: string = '';
  isSubmitted: boolean = false;
  private alerts: Array<any> = [];

  constructor(
    private addonsService:AddonsService,
    private layoutService:LayoutService,
    private modalService: NgbModal,     
    private router: Router) { }

  ngOnInit() {}

  private createAddons(){

    let param = [];
  
    param.push({
      "price":this.price,
      "description":this.description
    });

    this.saveAddons(param[0]);
      
  }

  private saveAddons(addonsDetails){
    this.isSubmitted = true;
    this.addonsService.createAddons(addonsDetails).subscribe(
      data => {
        if(!this.isEmpty(data)){
          this.successMessage('AddOns successfully added.');

          setTimeout(()=>{
            this.closeActiveAlert();
            this.router.navigateByUrl('addons');  
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

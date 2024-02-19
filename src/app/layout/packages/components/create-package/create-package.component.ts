import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import {Router } from '@angular/router';
import { PackagesService } from '../../../packages/services/packages.service';
import { LayoutService } from '../../../layout.service';
import { packageDetailsDto } from '../../../packages/model/packages.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['../../../layout.component.scss', './create-package.component.css'],
  animations: [routerTransition()],
  encapsulation: ViewEncapsulation.None
})
export class CreatePackageComponent implements OnInit {
  errorMessage: string = "Unexpected error encountered.";
  packagetDetails: packageDetailsDto = new packageDetailsDto;
  selectedPackageId: string;
  name: string = '';
  price: number;
  description: string = '';
  credits: number;
  isSubmitted: boolean = false;
  private alerts: Array<any> = [];

  constructor(
    private packageService:PackagesService,
    private layoutService:LayoutService,
    private modalService: NgbModal,     
    private router: Router) { }

  ngOnInit() {}

  private createPackage(){

    let param = [];
  
    param.push({
      "name": this.name,
      "price":this.price,
      "description":this.description,
      "freeCredits": this.credits
    });

    this.savePackage(param[0]);
      
  }

  private savePackage(packageDetails){
    this.isSubmitted = true;
    this.packageService.createPackage(packageDetails).subscribe(
      data => {
        if(!this.isEmpty(data)){
          this.successMessage('Package successfully added.');

          setTimeout(()=>{
            this.closeActiveAlert();
            this.router.navigateByUrl('packages');  
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

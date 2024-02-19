import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import {Router} from '@angular/router';
import { ServicesService } from '../../../services/services/services.service';
import { AddonsService } from '../../../addons/services/addons.service';
import { PackagesService } from '../../../packages/services/packages.service';
import { LayoutService } from '../../../layout.service';
import { ServicesDto } from '../../../services/model/services.model';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['../../../layout.component.scss', './create-service.component.css'],
  animations: [routerTransition()],
  encapsulation: ViewEncapsulation.None
  
})
export class CreateServiceComponent implements OnInit {
  errorMessage: string = "Unexpected error encountered.";
  servicesDetails: ServicesDto = new ServicesDto;
  loading: boolean = false;
  saveServiceStatus: boolean = false; 
  uploadIconStatus: boolean = false; 
  uploadBannerStatus: boolean = false; 
  serviceType: string = '';
  name: string = '';
  serviceAddOns: any[] = [];
  addOns: any[] = [];
  selectedAddOns: any[] = [];
  servicePackages: any[] = [];
  packages: any[] = [];
  selectedPackages: any[] = [];
  description: string = '';
  updatedTime: Date = new Date();
  createdTime: Date = new Date();
  selectedIconFile: File =  null;
  selectedBannerFile: File =  null;
  isFeatured: boolean = false;
  isSubmitted: boolean = false;

  private alerts: Array<any> = [];

  constructor(
    private servicesService:ServicesService,
    private addonsService:AddonsService,
    private packagesService:PackagesService,
    private layoutService:LayoutService,
    private modalService: NgbModal,     
    private router: Router) { }

  ngOnInit() {
    this.getAddons();
    this.getPackages();
  }

  private value:any = this.addOns;
  // private _disabledV:string = '0';
  // private disabled:boolean = false;
 
  // private get disabledV():string {
  //   return this._disabledV;
  // }
 
  
  public refreshAddOnsValue(value:any):void {
    this.selectedAddOns = value.map((item:any) => {return item.text;});
  }

  public refreshPackagesValue(value:any):void {
    this.selectedPackages = value.map((item:any) => {return item.text;});
  }
 
  onFileIconSelected(event){
    this.selectedIconFile = <File>event.target.files[0];
  }

  onFileBannerSelected(event){
    this.selectedBannerFile = <File>event.target.files[0];
  }

  // chkIsFeatured(event){
  //   this.isFeatured = event.target.checked;
  // }

  private getAddons(){
    this.addonsService.getAddons().subscribe(
      data => {
        if(data != undefined){
          console.log(data);
          this.serviceAddOns = data;

          for(var x=0; x < data.length; x++){
            this.addOns.push(data[x].description);
          }
        }
        console.log(this.addOns);
      }, err => {
        console.log(err)
      });
  }

  private getPackages(){
    this.packagesService.getPackages().subscribe(
      data => {
        if(data != undefined){
          console.log(data);
          this.servicePackages = data;

          for(var x=0; x < data.length; x++){
            this.packages.push(data[x].name);
          }
        }
        console.log(this.packages);
      }, err => {
        console.log(err)
      });
  }
  
  private createService(){
    this.loading = true;
    let arrSelectedAddOnsId = [],
      arrSelectedPackagesId = [],
      param = [];

      this.selectedAddOns.map((addOnsItem:any) => {
        this.serviceAddOns.forEach((item, index) => {
          if(item.description == addOnsItem){
            arrSelectedAddOnsId.push(this.serviceAddOns[index].id);
          }
        });
      });

      this.selectedPackages.map((packagesItem:any) => {
        this.servicePackages.forEach((item, index) => {
          if(item.name == packagesItem){
            arrSelectedPackagesId.push(this.servicePackages[index].id);
          }
        });
      });
    
      param.push({
        "status":"ACTIVE",
        "serviceType":this.serviceType.toLocaleUpperCase(),
        "name":this.name.trim(),  
        "description":this.description.trim(),
        "featured":this.isFeatured,
        "serviceAddOns":arrSelectedAddOnsId,
        "servicePackages":arrSelectedPackagesId
      });
      
    this.saveService(param[0]);
  }

  private saveService(serviceDetails){
    this.isSubmitted = true;
    this.servicesService.createService(serviceDetails).subscribe(
      data => {

        if(!this.isEmpty(data)){
          
          /**
          if(this.selectedIconFile == null && this.selectedBannerFile == null){
            this.saveServiceStatus = true;
            this.processCompleted(); 
          } else {
            if(this.selectedIconFile != null){
              this.uploadIcon(data.id);
            }
            
            if(this.selectedBannerFile != null){
              this.uploadBanner(data.id);
            }
          }
          */

         this.loading = false;
         this.successMessage('Service successfully added.');
     
         setTimeout(()=>{
           this.closeActiveAlert();
           this.router.navigateByUrl('services'); 
         }, 3000);
          
        } else {
          this.errMessage(this.errorMessage);
        }
      }, err => {
        console.log(err)
        this.errMessage(this.errorMessage);
    }); 
  }

  private processCompleted(){
    let x = false;
    
    if((this.selectedIconFile != null && this.uploadIconStatus) && (this.selectedBannerFile != null  && this.uploadBannerStatus)){
      x = true;
      console.log('banner and icon uploaded');
    } else if(this.selectedIconFile != null && this.selectedBannerFile == null && this.uploadIconStatus){
      x = true;
      console.log('icon uploaded');
    } else if(this.selectedIconFile == null && this.selectedBannerFile != null && this.uploadBannerStatus){
      x = true;
      console.log('banner uploaded.');
    } else if(this.selectedIconFile == null && this.selectedBannerFile == null && this.saveServiceStatus){
      x = true;
      console.log('no file uploaded.');
    }

    if(x){
      this.loading = false;
      this.successMessage('Service successfully added.');
  
      setTimeout(()=>{
        this.closeActiveAlert();
        this.router.navigateByUrl('services'); 
      }, 3000);
    }
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

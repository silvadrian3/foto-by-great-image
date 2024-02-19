import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ServicesService } from '../../../services/services/services.service';
import { AddonsService } from '../../../addons/services/addons.service';
import { PackagesService } from '../../../packages/services/packages.service';
import { LayoutService } from '../../../layout.service';
import { ServicesDto } from '../../../services/model/services.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['../../../layout.component.scss', './update-service.component.css'],
  animations: [routerTransition()],
  encapsulation: ViewEncapsulation.None
})
export class UpdateServiceComponent implements OnInit {
  loading: boolean = false;
  errorMessage: string = "Unexpected error encountered.";
  servicesDetails: ServicesDto = new ServicesDto;
  serviceTypeId: string = '';
  saveServiceStatus: boolean = false;
  uploadIconStatus: boolean = false; 
  uploadBannerStatus: boolean = false; 
  serviceType: string = '';
  name: string = '';
  description: string = '';
  defaultAddOns: any[] = [];
  serviceAddOns: any[] = [];
  addOns: any[] = [];
  selectedAddOns: any[] = [];
  defaultPackages: any[] = [];
  servicePackages: any[] = [];
  packages: any[] = [];
  selectedPackages: any[] = [];
  updatedTime: Date = new Date();
  createdTime: Date = new Date();  
  iconUrl: string = '';
  bannerUrl: string = '';
  hdBannerFileUpload: boolean = true;
  hdIconFileUpload: boolean = true;
  selectedIconFile: File =  null;
  selectedBannerFile: File =  null;
  isFeatured: boolean = false;
  private alerts: Array<any> = [];

  constructor(
    private servicesService:ServicesService,
    private addonsService:AddonsService,
    private packagesService:PackagesService,
    private layoutService:LayoutService,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    this.loading = true;
    

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.serviceTypeId = params['id'];
      this.readService(this.serviceTypeId);
      
    });
    
  }

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


  private readService(selectedId){
    this.servicesService.readService(selectedId).subscribe(
      data => {

        console.log(data);
        this.serviceType = data.serviceType.toLocaleUpperCase();
        this.name = data.name;

        
        
        this.iconUrl = data.iconUrl;
        this.bannerUrl = data.bannerUrl;
        

        if(!this.isEmpty(data.serviceAddOns)){
          for(var x=0; x < data.serviceAddOns.length; x++){
            this.defaultAddOns.push(data.serviceAddOns[x].description);
          }
        }

        if(!this.isEmpty(data.servicePackages)){
          for(var y=0; y < data.servicePackages.length; y++){
            this.defaultPackages.push(data.servicePackages[y].name);
          }
        }

        this.description = data.description;
        this.isFeatured = data.featured;
        
        this.loading = false;

        if(this.iconUrl == ""){
          this.hdIconFileUpload = false;
        }

        if(this.bannerUrl == ""){
          this.hdBannerFileUpload = false;
        }

        this.getAddons();
      this.getPackages();
        
        
      }, err => {
        console.log(err)
    });

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

  private updateService(){
    this.loading = true;
    let param = [],
    arrSelectedAddOnsId = [],
    arrSelectedPackagesId = [];
    

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
      "description": this.description.trim(),
      "featured":this.isFeatured,
      "serviceAddOns":arrSelectedAddOnsId,
      "servicePackages":arrSelectedPackagesId
    });
    
    this.saveService(param[0]);
  }

  private saveService(serviceDetails){
    this.servicesService.updateService(this.serviceTypeId, serviceDetails).subscribe(
      data => {
        
        console.log(data);
        if(!this.isEmpty(data)){

          /**
          if(this.selectedIconFile == null && this.selectedBannerFile == null){
            this.saveServiceStatus = true;
            this.processCompleted(); 
          } else {
            if(this.selectedIconFile != null){
              this.uploadIcon(this.serviceTypeId);
            }
            
            if(this.selectedBannerFile != null){
              this.uploadBanner(this.serviceTypeId);
            }
          }
          */

          this.loading = false;
          this.successMessage('Service successfully updated.');
      
          setTimeout(()=>{
            this.closeActiveAlert();
            this.router.navigateByUrl('services'); 
          }, 3000);
          
        } else {
          this.errMessage(this.errorMessage);
        }
        
      }, err => {
        console.log(err)
    });
    
  }

  

  private processCompleted(){
    let x = false;
    if((this.selectedIconFile != null && this.uploadIconStatus) && (this.selectedBannerFile != null  && this.uploadBannerStatus)){
      x = true;
      console.log('upload banner and icon');
    } else if(this.selectedIconFile != null && this.selectedBannerFile == null && this.uploadIconStatus){
      x = true;
      console.log('upload icon');
    } else if(this.selectedIconFile == null && this.selectedBannerFile != null && this.uploadBannerStatus){
      x = true;
      console.log('upload banner');
    } else if(this.selectedIconFile == null && this.selectedBannerFile == null && this.saveServiceStatus){
      x = true;
      console.log('no upload');
    }

    if(x){
      this.loading = false;
      this.successMessage('Service successfully updated.');
  
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

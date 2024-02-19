import { Component, OnInit, ViewEncapsulation, ViewChild, Renderer, ElementRef } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { ServicesService } from '../../../services/services/services.service';
import { AddonsService } from '../../../addons/services/addons.service';
import { PackagesService } from '../../../packages/services/packages.service';
import { LayoutService } from '../../../layout.service';
//import { BookingDto } from '../../../active-bookings/model/active-bookings.model';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';
import { NgxSpinnerService } from 'ngx-spinner';
import { Key } from 'protractor';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['../../../layout.component.scss', './services.component.css'],
  animations: [routerTransition()],
  encapsulation: ViewEncapsulation.None
})

export class ServicesComponent implements OnInit {
  errorMessage: string = "Unexpected error encountered.";
  loading: boolean = false;
  loadingSpinner: boolean = false;
  closeResult: string;
  selectedServiceId: string;
  services: any [] = [];
  servicesCount = 0;
  selectedServiceDetails: any;
  selectedServicePhotos: any [] = [];
  selectedServiceBanner: any [] = [];
  selectedServiceIcon: any [] = [];
  openedPhotoUrl: string;
  openedPhotoIndex: number;
  openedPhotoServiceId: any;
  displayUploadBanner: boolean = false;
  displayUploadIcon: boolean = false;
  
  addOns: any[] = [];
  defaultAddOns: any[] = [];
  selectedAddOns: any[] = [];
  serviceAddOns: any[] = [];
  packages: any[] = [];
  defaultPackages: any[] = [];
  selectedPackages: any[] = [];
  servicePackages: any[] = [];

  private alerts: Array<any> = [];
  private panelAlerts: Array<any> = [];
  modalReference: NgbModalRef;
  dtTranslations;
  dtServicesResource;

  @ViewChild(DataTable) servicesTable:DataTable;

  selectedBannerFile: File =  null;
  selectedIconFile: File =  null;
  selectedPhotoFile: File =  null;
  selectedPhotoFilesCnt: number = 0;
  selectedPhotosCnt: number = 0;
  constructor(
    private servicesService:ServicesService, 
    private layoutService:LayoutService, 
    private addonsService:AddonsService,
    private packagesService:PackagesService,
    private modalService: NgbModal,
    private renderer: Renderer, private elem: ElementRef,
    private spinner: NgxSpinnerService
  ) {
    this.dtTranslations = <DataTableTranslations>{
      indexColumn: '#',
      expandColumn: 'Expand column',
      selectColumn: 'Select column',
      paginationLimit: 'Limit',
      paginationRange: 'Results'
    }
  }

  ngOnInit() {
    this.getServices();   
  }

  expandRow(evt) {
    if(evt.event.target.id != 'spDelete' && evt.event.target.id != 'spUpdate'){
      evt.row.expanded = !evt.row.expanded;
    }
  }
  
  private getServices(){
    this.closeActiveAlert();
    this.closeActivePanelAlert();

    this.loading = true;
    this.spinner.hide();
    this.loadingSpinner = false;
    
    this.servicesService.getServices().subscribe(
      data => {
        console.log(data);
          this.services = data;
          this.dtServicesResource = new DataTableResource(this.services);
          this.dtServicesResource.count().then(count => this.servicesCount = count);
          this.servicesTable.reloadItems();
          
          this.loading = false;
          
      }, err => {
        console.log(err)
    });
  }

  reloadServices(params) {
    if(this.dtServicesResource != undefined){
      this.dtServicesResource.query(params).then(services => this.services = services);
    }
  }

  private readService(selectedId, src){
    this.loading = true;
    this.loadingSpinner = false;
    this.spinner.hide();

    //this.selectedServicePhotos = [];
    
    //console.log('readService()');
    //this.loading = true;
    //console.log(src);
    
    this.servicesService.readService(selectedId).subscribe(
      data => {


        //console.log('get services', banners);
        if(src == 'packages'){
          
          this.defaultPackages = [];
          this.packages = [];
          this.servicePackages = [];

          if(!this.isEmpty(data.servicePackages)){
            for(var y=0; y < data.servicePackages.length; y++){
              this.defaultPackages.push(data.servicePackages[y].name);
            }
          }

          //console.log('selected packages', this.defaultPackages);
        }

        if(src == 'addons'){
          
          this.defaultAddOns = [];

          if(!this.isEmpty(data.serviceAddOns)){
            for(var x=0; x < data.serviceAddOns.length; x++){
              this.defaultAddOns.push(data.serviceAddOns[x].description);
            }
          }

          
        }

        if(src == 'servicePhoto'){

          this.selectedServicePhotos.forEach((item, index) => {
            if(item.selectedServiceId == selectedId){
              this.selectedServicePhotos[index].data = [];  
              //checkExists = true;
              return false;
            }
          });

          let imgData = [];
          if(data.imageUrls != null){
            imgData = data.imageUrls;
          }

          this.selectedServicePhotos.push({ 
            "selectedServiceId": selectedId,
            "data": imgData
          });

        }

        if(src == 'banners'){
          
          this.selectedServiceBanner.forEach((item, index) => {
            if(item.selectedServiceId == selectedId){
              this.selectedServiceBanner[index].data = [];  
              //checkExists = true;
              return false;
            }
          });

          let imgData = [];
          if(data.bannerUrl != null){
            imgData = data.bannerUrl;
          }

          this.selectedServiceBanner.push({ 
            "selectedServiceId": selectedId,
            "data": imgData
          });

          
        }

        if(src == 'icons'){
          
          this.selectedServiceIcon.forEach((item, index) => {
            if(item.selectedServiceId == selectedId){
              this.selectedServiceIcon[index].data = [];  
              //checkExists = true;
              return false;
            }
          });

          let imgData = [];
          if(data.iconUrl != null){
            imgData = data.iconUrl;
          }

          this.selectedServiceIcon.push({ 
            "selectedServiceId": selectedId,
            "data": imgData
          });

          console.log('selectedServiceBanner: ', this.selectedServiceIcon);
        }

        
        

        //this.getPackages();
        //this.getAddons();

        this.loading = false;
        
      }, err => {
        console.log(err)
    });

  }

  private getAddons(){

    this.addOns = [];
    this.addonsService.getAddons().subscribe(
      data => {
        if(data != undefined){
          for(var x=0; x < data.length; x++){
            this.addOns.push(data[x].description);
           }
           console.log(this.addOns);
        }
      }, err => {
        console.log(err)
      });
  }

  private getPackages(){
    
    
    this.packagesService.getPackages().subscribe(
      data => {
        if(data != undefined){

          this.servicePackages = data;

          for(var x=0; x < data.length; x++){
            this.packages.push(data[x].name);
          }

          console.log(this.packages);
        }
      }, err => {
        console.log(err)
      });
  }


  public refreshAddOnsValue(value:any):void {
    if(value != null){
      this.selectedAddOns = value.map((item:any) => {return item.text;});
    }
  }

  public refreshPackagesValue(value:any):void {
    this.selectedPackages = value.map((item:any) => {return item.text;});
  }
  
  open(content) {

    this.modalReference = this.modalService.open(content,  {'size': 'lg', backdrop: 'static', keyboard: false});
    
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    
  }

  private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
      } else {
          return  `with: ${reason}`;
      }
  }

  // private getServiceDetailsRow(id) {
  //   this.services.forEach((item, index) => {
  //       if(item.id == id){
  //         this.selectedServiceDetails = this.services[index];
  //         console.log(this.services[index]);
  //         return false;
  //       }
  //   });
  // }
  
  private deleteServiceRow(id){
    if(confirm("Are you sure you want to archive this Service?")){
      this.loading = true;
      this.deleteService(id);
    }
  }

  private deleteService(id){
    // var rowsResult = ths.servicesTable.rows._results;
    // rowsResult.forEach((item, index) => {
    //   item.expanded = false;
    //   console.log(item.expanded);
    // });

    this.servicesService.deleteService(id).subscribe(
      data => {

        //console.log(data);
        if(data.status==200){
          this.loading = false;
          this.successMessage('Service successfully archived.');
          setTimeout(()=>{
            this.closeActiveAlert();
            this.getServices();
          }, 3000);          
        } else {
          this.errMessage(this.errorMessage);
        }
        
      }, err => {
        console.log(err)
    });
  }

  private savePackages(selectedId){
    this.loading = true;
      let arrSelectedPackagesId = [];

      this.selectedPackages.map((packagesItem:any) => {
        this.servicePackages.forEach((item, index) => {

          if(item.name == packagesItem){
            arrSelectedPackagesId.push(this.servicePackages[index].id);
          }
        });
      });

      this.servicesService.updateService(selectedId, {"servicePackages": arrSelectedPackagesId}).subscribe(
        data => {
          
          console.log(data);
          if(!this.isEmpty(data)){
            this.loading = false;
          this.successMessage('Service successfully updated.');
      
          setTimeout(()=>{
            this.closeActiveAlert();
            this.getServices();
          }, 3000);
            
          } else {
            this.errMessage(this.errorMessage);
          }
          
      }, err => {
        console.log(err)
      });
  }

  private saveAddons(selectedId){
    console.log(selectedId);
    console.log(this.defaultAddOns);

    this.loading = true;
    let arrSelectedAddOnsId = [],
      param = [];


    this.addOns.map((addOnsItem:any) => {
      this.defaultAddOns.forEach((item, index) => {
        if(item.description == addOnsItem){
          arrSelectedAddOnsId.push(this.addOns[index].serviceAddOnsId);
        }
      });
    });


    this.servicesService.updateService(selectedId, {"serviceAddOns": arrSelectedAddOnsId}).subscribe(
      data => {
        
        console.log(data);
        if(!this.isEmpty(data)){
          console.log('updated');
          
        } else {
          this.errMessage(this.errorMessage);
        }
        
      }, err => {
        console.log(err)
    });

  }


  // showUploadBannerUrl(){
  //   this.displayUploadBanner = true;
  // }

  // showUploadIconUrl(){
  //   this.displayUploadIcon = true;
  // }

  onBannerSelected(event, serviceId){
    this.loading = true;
    this.selectedBannerFile = <File>event.target.files[0];
    //this.onUpload(this.selectedBannerFile, serviceId, "banner");
    this.selectedServiceId = serviceId;

    this.servicesService.createPhoto(this.selectedBannerFile, 'banner').subscribe(data => {
      if(data != undefined){
        if(data.status == 200){

          let serviceIndex = 0,
            param = [];

          param.push({
            "bannerUrl": data.body.url
          });

          this.saveService(param[0], serviceId, 'banner');

          this.selectedServiceBanner.forEach((item, index) => {
            if(item.selectedServiceId == serviceId){
              this.selectedServiceBanner[index].data = [];
              this.selectedServiceBanner[index].data.push(data.body.url);
              serviceIndex = index;
              return false;
            }
          });

        } else {
          console.log(data);
        }
      }
    });



  }

  onIconSelected(event, serviceId){
    this.loading = true;
    this.selectedIconFile = <File>event.target.files[0];
    this.selectedServiceId = serviceId;

    this.servicesService.createPhoto(this.selectedIconFile, 'icon').subscribe(data => {
      if(data != undefined){
        if(data.status == 200){

          let serviceIndex = 0,
            param = [];

          param.push({
            "iconUrl": data.body.url
          });

          this.saveService(param[0], serviceId, 'icon');

          this.selectedServiceIcon.forEach((item, index) => {
            if(item.selectedServiceId == serviceId){
              this.selectedServiceIcon[index].data = [];
              this.selectedServiceIcon[index].data.push(data.body.url);
              serviceIndex = index;
              return false;
            }
          });

        } else {
          console.log(data);
        }
      }
    });
  }

  
  onPhotoSelected(event, serviceId){
    this.selectedServiceId = serviceId;
    //this.selectedPhotoFile = <File>event.target.files;

    //if (event.target.files.length > 10){
      //alert("You are only allowed to upload a maximum of 10 files");
      //return false;
   //} else {
    
   //this.loading = true;

   this.loadingSpinner = true;
   this.spinner.show();
   this.selectedPhotosCnt = 0;
   
    for(this.selectedPhotoFilesCnt = 0; this.selectedPhotoFilesCnt < event.target.files.length; this.selectedPhotoFilesCnt++){
      this.selectedPhotoFile = <File>event.target.files[this.selectedPhotoFilesCnt];
      this.servicesService.createPhoto(this.selectedPhotoFile, "servicePhoto").subscribe(data => {
        
        if(data != undefined){
          if(!this.isEmpty(data)){
            if(data.status == 'uploading'){
              this.spinner.show();
              this.loadingSpinner = true;
              console.log('Progress => ', data.progress);
  
              //this.progressPercentage = data.progress;
              //this.ngProgress.set(data.progress);
            } else if (data.status == 'completed'){
  
              console.log(data);
              //this.spinner.hide();
              //this.loadingSpinner = false;
  
            } else {
  
              if(data.status == 200){
                let serviceIndex = 0;
                this.spinner.hide();
                this.loadingSpinner = false;
                console.log('Returned data on upload: #' + this.selectedPhotosCnt + ' ',  data);
                this.selectedPhotosCnt++;
  
                this.selectedServicePhotos.forEach((item, index) => {
                  if(item.selectedServiceId == serviceId){
                    this.selectedServicePhotos[index].data.push(data.body.url);
                    serviceIndex = index;
                    return false;
                  }
                });

                if((this.selectedPhotoFilesCnt == this.selectedPhotosCnt) && this.selectedPhotosCnt != 0){
              
                  this.saveService({"imageUrls":this.selectedServicePhotos[serviceIndex].data}, serviceId, 'servicePhoto');
                  //this.spinner.hide();
                  //this.loadingSpinner = false;
                }

              } else {
                console.log(data);
                //this.errMessage(this.errorMessage);
              }
            }
          }
        }
      });
    }  
  }

  private getPhotoDetailsRow(dataIndex, serviceId) {
    this.selectedServicePhotos.forEach((item, index) => {
        if(item.selectedServiceId == serviceId){
          this.openedPhotoUrl = this.selectedServicePhotos[index].data[dataIndex];
          this.openedPhotoServiceId = serviceId;
          this.openedPhotoIndex = dataIndex;
          return false;
        }
    });
  }

  private photoPreview(photoUrl) {
    this.openedPhotoUrl = photoUrl;
  }

  private deleteServicePhoto(serviceId, photoIndex) {

    if(confirm("Are you sure you want to delete this Photo?")){
      this.selectedServicePhotos.forEach((item, index) => {
        if(item.selectedServiceId == serviceId){
          this.selectedServicePhotos[index].data.splice(photoIndex, 1);
          //this.loading = true;
          
          this.servicesService.updateService(serviceId, {"imageUrls":this.selectedServicePhotos[index].data}).subscribe(data => {
            if(!this.isEmpty(data)){
              this.modalReference.close();
            }
          }, err => {
              console.log(err)
          });
          return false;
        }
      });
    }
  }

  private saveService(serviceDetails, serviceId, src){
    this.servicesService.updateService(serviceId, serviceDetails).subscribe(
      data => {
        
        console.log(data);
        if(!this.isEmpty(data)){

          this.loading = false;
          if(src == "servicePhoto"){
            this.successPanelMessage('Photo successfully uploaded.');
            this.spinner.hide();
            this.loadingSpinner = false;
          } else if(src == "banner"){
            
            this.successPanelMessage('Banner successfully uploaded.');
            setTimeout(()=>{
              this.closeActivePanelAlert();
              //this.readService(serviceId, src);
              //this.getServices();
            }, 3000);
          } else if(src == "icon"){
            
            this.successPanelMessage('Icon successfully uploaded.');
            setTimeout(()=>{  
              this.closeActivePanelAlert();
              //this.readService(serviceId, src);
              //this.getServices();
            }, 3000);
          }
          
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

  private errPanelMessage(msg){
    this.closeActivePanelAlert();
      this.panelAlerts.push({
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

  private successPanelMessage(msg){
    this.closeActivePanelAlert();
    
    setTimeout(()=>{
      this.panelAlerts.push({
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

  private closePanelAlert(panelAlerts: any) {    
    const index: number = this.panelAlerts.indexOf(alert);
    this.panelAlerts.splice(index, 1);
  }

  private closeActiveAlert(){
    this.alerts.splice(0, 1);
  }

  private closeActivePanelAlert(){
    this.panelAlerts.splice(0, 1);
  }

  private isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

}

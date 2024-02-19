import { Component, OnInit, ViewEncapsulation, ViewChild, Renderer, ElementRef } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { PackagesService } from '../../../packages/services/packages.service';
import { LayoutService } from '../../../layout.service';
import { packageDetailsDto } from '../../../packages/model/packages.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['../../../layout.component.scss', './packages.component.css'],
  animations: [routerTransition()],
  encapsulation: ViewEncapsulation.None
})

export class PackagesComponent implements OnInit {
  errorMessage: string = "Unexpected error encountered.";
  packageDetails: packageDetailsDto = new packageDetailsDto;
  loading: boolean = false;
  closeResult: string;
  packages: any [] = [];
  packageCount = 0;
  selectedPackageDetails: any;
  private alerts: Array<any> = [];
  
  translations;
  dtPackagesResource;

  @ViewChild(DataTable) packagesTable:DataTable;

    constructor(
      private packagesService:PackagesService, 
      private layoutService:LayoutService, 
      private modalService: NgbModal,
      private renderer: Renderer, private elem: ElementRef
    ) {
      this.translations = <DataTableTranslations>{
        indexColumn: '#',
        expandColumn: 'Expand column',
        selectColumn: 'Select column',
        paginationLimit: 'Limit',
        paginationRange: 'Results'
      }
    }
  
    ngOnInit() {
      this.getPackages();
    }
    
    private getPackages(){
      this.loading = true;
      this.packagesService.getPackages().subscribe(
        data => {
          console.log(data);

          if(data != undefined){
            this.packages = data;
            this.dtPackagesResource = new DataTableResource(this.packages);
            this.dtPackagesResource.count().then(count => this.packageCount = count);
            this.packagesTable.reloadItems();

            this.loading = false;
          }

        }, err => {
          console.log(err)
        });
    }

    reloadPackages(params) {
      if(this.dtPackagesResource != undefined){
        this.dtPackagesResource.query(params).then(packages => this.packages = packages);
      }
    }

    cellColor(car) {
        return 'rgb(255, 255,' + (155 + Math.floor(100 - ((car.rating - 8.7)/1.3)*100)) + ')';
    };


  open(content) {
    this.modalService.open(content,  {'size': 'lg', backdrop: 'static', keyboard: false}).result.then((result) => {
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

  private getPackageDetailsRow(id) {
    this.packages.forEach((item, index) => {
        if(item.id == id){
          this.selectedPackageDetails = this.packages[index];
          return false;
        }
    });
  }

  private deletePackageDetailsRow(id){
    if(confirm("Are you sure you want to archive this package?")){
      this.deletePackage(id);
    }
  }

  private deletePackage(id){
    this.packagesService.deletePackage(id).subscribe(
      data => {

        console.log(data);
        //if(!this.isEmpty(data)){
        if(data.status==200){
          this.successMessage('Package successfully archived.');
          setTimeout(()=>{
            this.closeActiveAlert();
            this.getPackages();
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

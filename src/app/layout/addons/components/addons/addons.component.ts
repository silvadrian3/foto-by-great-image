import { Component, OnInit, ViewEncapsulation, ViewChild, Renderer, ElementRef } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { AddonsService } from '../../../addons/services/addons.service';
import { LayoutService } from '../../../layout.service';
import { addonsDetailsDto } from '../../../addons/model/addons.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';

@Component({
  selector: 'app-addons',
  templateUrl: './addons.component.html',
  styleUrls: ['../../../layout.component.scss', './addons.component.css'],
  animations: [routerTransition()],
  encapsulation: ViewEncapsulation.None
})

export class AddonsComponent implements OnInit {
  errorMessage: string = "Unexpected error encountered.";
  addonsDetails: addonsDetailsDto = new addonsDetailsDto;
  loading: boolean = false;
  closeResult: string;
  addons: any [] = [];
  addonsCount = 0;
  selectedAddonsDetails: any;
  private alerts: Array<any> = [];
  
  translations;
  dtAddonsResource;

  @ViewChild(DataTable) addonsTable:DataTable;

    constructor(
      private addonsService:AddonsService, 
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
      this.getAddons();
    }
    
    private getAddons(){
      this.loading = true;
      this.addonsService.getAddons().subscribe(
        data => {
          console.log(data);

          if(data != undefined){
            this.addons = data;
            this.dtAddonsResource = new DataTableResource(this.addons);
            this.dtAddonsResource.count().then(count => this.addonsCount = count);
            this.addonsTable.reloadItems();

            this.loading = false;
          }

        }, err => {
          console.log(err)
        });
    }

    reloadAddons(params) {
      if(this.dtAddonsResource != undefined){
        this.dtAddonsResource.query(params).then(addons => this.addons = addons);
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

  private getAddonsDetailsRow(id) {
    this.addons.forEach((item, index) => {
        if(item.id == id){
          this.selectedAddonsDetails = this.addons[index];
          return false;
        }
    });
  }

  private deleteAddonsDetailsRow(id){
    if(confirm("Are you sure you want to archive this AddOns?")){
      this.deleteAddons(id);
    }
  }

  private deleteAddons(id){
    this.addonsService.deleteAddons(id).subscribe(
      data => {
        //if(!this.isEmpty(data)){
          if(data.status==200){
          this.successMessage('AddOns successfully archived.');
          setTimeout(()=>{
            this.closeActiveAlert();
            this.getAddons();
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

import { Component, OnInit, ViewEncapsulation, ViewChild, Renderer, ElementRef } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { PromosService } from '../../../promos/services/promos.service';
import { LayoutService } from '../../../layout.service';
import { promosDetailsDto } from '../../../promos/model/promos.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';

@Component({
  selector: 'app-promos',
  templateUrl: './promos.component.html',
  styleUrls: ['../../../layout.component.scss', './promos.component.css'],
  animations: [routerTransition()],
  encapsulation: ViewEncapsulation.None
})

export class PromosComponent implements OnInit {
  errorMessage: string = "Unexpected error encountered.";
  promosDetails: promosDetailsDto = new promosDetailsDto;
  loading: boolean = false;
  closeResult: string;
  promos: any [] = [];
  promoCount = 0;
  selectedPromoDetails: any;
  private alerts: Array<any> = [];
  
  translations;
  dtPromosResource;

  @ViewChild(DataTable) promosTable:DataTable;

    constructor(
      private promosService:PromosService, 
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
      this.getPromos();
    }
    
    private getPromos(){
      this.loading = true;
      this.promosService.getPromos().subscribe(
        data => {
          console.log(data);

          if(data != undefined){
            this.promos = data;
            this.dtPromosResource = new DataTableResource(this.promos);
            this.dtPromosResource.count().then(count => this.promoCount = count);
            this.promosTable.reloadItems();

            this.loading = false;
          }

        }, err => {
          console.log(err)
        });
    }

    reloadPromos(params) {
      if(this.dtPromosResource != undefined){
        this.dtPromosResource.query(params).then(promos => this.promos = promos);
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

  private getPromosDetailsRow(id) {
    this.promos.forEach((item, index) => {
        if(item.id == id){
          this.selectedPromoDetails = this.promos[index];
          return false;
        }
    });
  }

  private deletePromoDetailsRow(id){
    if(confirm("Are you sure you want to archive this promo?")){
      this.deletePromo(id);
    }
  }

  private deletePromo(id){
    this.promosService.deletePromo(id).subscribe(
      data => {

        //console.log(data);
        if(data.status==200){
          this.successMessage('Promo successfully archived.');
          setTimeout(()=>{
            this.closeActiveAlert();
            this.getPromos();
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

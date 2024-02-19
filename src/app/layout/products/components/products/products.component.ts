import { Component, OnInit, ViewEncapsulation, ViewChild, Renderer, ElementRef } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { ProductsService } from '../../../products/services/products.service';
import { LayoutService } from '../../../layout.service';
import { productDetailsDto } from '../../../products/model/products.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['../../../layout.component.scss', './products.component.css'],
  animations: [routerTransition()],
  encapsulation: ViewEncapsulation.None
})

export class ProductsComponent implements OnInit {
  errorMessage: string = "Unexpected error encountered.";
  productDetails: productDetailsDto = new productDetailsDto;
  loading: boolean = false;
  closeResult: string;
  products: any [] = [];
  productCount = 0;
  selectedProductDetails: any;
  private alerts: Array<any> = [];
  
  translations;
  dtProductsResource;

  @ViewChild(DataTable) productsTable:DataTable;

    constructor(
      private productsService:ProductsService, 
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
      this.getProducts();
    }
    
    private getProducts(){
      this.loading = true;
      this.productsService.getProducts().subscribe(
        data => {
          console.log(data);

          if(data != undefined){
            this.products = data;
            this.dtProductsResource = new DataTableResource(this.products);
            this.dtProductsResource.count().then(count => this.productCount = count);
            this.productsTable.reloadItems();

            this.loading = false;
          }

        }, err => {
          console.log(err)
        });
    }

    reloadProducts(params) {
      if(this.dtProductsResource != undefined){
        this.dtProductsResource.query(params).then(products => this.products = products);
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

  private getProductDetailsRow(id) {
    this.products.forEach((item, index) => {
        if(item.productId == id){

          console.log('id',id);
          console.log('item.id',item.productId);

          this.selectedProductDetails = this.products[index];
          return false;
        }
    });
  }

  private deleteProductDetailsRow(id){
    if(confirm("Are you sure you want to archive this product?")){
      this.deleteProduct(id);
    }
  }

  private deleteProduct(id){
    this.productsService.deleteProduct(id).subscribe(
      data => {
        if(!this.isEmpty(data)){
          this.successMessage('Product successfully archived.');
          setTimeout(()=>{
            this.closeActiveAlert();
            this.getProducts();
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

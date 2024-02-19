import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import {Router} from '@angular/router';
import { ProductsService } from '../../../products/services/products.service';
import { LayoutService } from '../../../layout.service';
import { productDetailsDto } from '../../../products/model/products.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['../../../layout.component.scss', './create-product.component.css'],
  animations: [routerTransition()],
  encapsulation: ViewEncapsulation.None
})
export class CreateProductComponent implements OnInit {
  errorMessage: string = "Unexpected error encountered.";
  productDetails: productDetailsDto = new productDetailsDto;
  selectedProductId: string;
  name: string = '';
  price: number;
  creditType: string = '';
  credits: number;
  isSubmitted: boolean = false;
  private alerts: Array<any> = [];

  constructor(
    private productService:ProductsService,
    private layoutService:LayoutService,
    private modalService: NgbModal,     
    private router: Router) { }

  ngOnInit() {}

  private createProduct(){

    let param = [];
  
    param.push({
      "name": this.name,
      "price":this.price,
      "creditType":this.creditType,
      "credits":this.credits
    });

    this.saveProduct(param[0]);
      
  }

  private saveProduct(productDetails){
    this.isSubmitted = true;
    this.productService.createProduct(productDetails).subscribe(
      data => {
        if(!this.isEmpty(data)){
          this.successMessage('Product successfully added.');

          setTimeout(()=>{
            this.closeActiveAlert();
            this.router.navigateByUrl('products');  
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

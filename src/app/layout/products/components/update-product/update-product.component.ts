import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ProductsService } from '../../../products/services/products.service';
import { LayoutService } from '../../../layout.service';
import { productDetailsDto } from '../../../products/model/products.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import {INgxMyDpOptions, IMyDateModel} from 'ngx-mydatepicker';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['../../../layout.component.scss', './update-product.component.css'],
  animations: [routerTransition()],
  encapsulation: ViewEncapsulation.None
})
export class UpdateProductComponent implements OnInit {
  loading: boolean = false;
  errorMessage: string = "Unexpected error encountered.";
  productDetails: productDetailsDto = new productDetailsDto;
  selectedProductId: string;
  name: string = '';
  price: number;
  creditType: string = '';
  credits: number;

  private alerts: Array<any> = [];

  constructor(
    private productsService:ProductsService, 
    private layoutService:LayoutService, 
    private modalService: NgbModal, 
    private activatedRoute: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    this.loading = true;
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.selectedProductId = params['id'];
      this.readProduct(this.selectedProductId);
    });

  }


  private readProduct(selectedProductId){
    this.productsService.readProduct(selectedProductId).subscribe(
      data => {

        console.log(data);
        
        this.name = data.name;
        this.price = data.price;
        this.creditType = data.creditType;
        this.credits = data.credits;
        
        // if(data.results[0].records[0].birthday != "" && data.results[0].records[0].birthday != null){
        //   let datePipe = new DatePipe("en-US"),
        //     dateOfBirth = data.results[0].records[0].birthday,
        //     d = datePipe.transform(dateOfBirth, 'dd'),
        //     m = datePipe.transform(dateOfBirth, 'M'),
        //     y = datePipe.transform(dateOfBirth, 'yyyy');
          
        //   this.dateOfBirthUI = {date: { year: y, month: m, day: d }};
        // }
        this.loading = false;
          
      }, err => {
        console.log(err)
    });
  }

  private updateProduct(){
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
    this.productsService.updateProduct(productDetails, this.selectedProductId).subscribe(
      data => {
        if(!this.isEmpty(data)){
          this.successMessage('Product successfully updated.');

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

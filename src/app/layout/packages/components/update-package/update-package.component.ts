import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { PackagesService } from '../../../packages/services/packages.service';
import { LayoutService } from '../../../layout.service';
import { packageDetailsDto } from '../../../packages/model/packages.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-package',
  templateUrl: './update-package.component.html',
  styleUrls: ['../../../layout.component.scss', './update-package.component.css'],
  animations: [routerTransition()],
  encapsulation: ViewEncapsulation.None
})
export class UpdatePackageComponent implements OnInit {
  loading: boolean = false;
  errorMessage: string = "Unexpected error encountered.";
  packageDetails: packageDetailsDto = new packageDetailsDto;
  selectedPackageId: string;
  name: string = '';
  price: number;
  description: string = '';
  credits: number;

  private alerts: Array<any> = [];

  constructor(
    private packagesService:PackagesService, 
    private layoutService:LayoutService, 
    private modalService: NgbModal, 
    private activatedRoute: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    this.loading = true;
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.selectedPackageId = params['id'];
      this.readPackage(this.selectedPackageId);
    });

  }

  private readPackage(selectedPackageId){
    this.packagesService.readPackage(selectedPackageId).subscribe(
      data => {

        console.log(data);
        
        this.name = data.name;
        this.price = data.price;
        this.description = data.description;
        this.credits = data.freeCredits;
        
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

  private updatePackage(){
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
    this.packagesService.updatePackage(packageDetails, this.selectedPackageId).subscribe(
      data => {
        if(!this.isEmpty(data)){
          this.successMessage('Package successfully updated.');

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

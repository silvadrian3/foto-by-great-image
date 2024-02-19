import { Component, OnInit, ViewEncapsulation, ViewChild, Pipe, PipeTransform } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { BranchesService } from '../../../branches/services/branches.service';
import { LayoutService } from '../../../layout.service';
import { branchDetailsDto } from '../../../branches/model/branches.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
//import {INgxMyDpOptions, IMyDateModel} from 'ngx-mydatepicker';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { LayoutComponent } from '../../../layout.component';
import { Password } from 'primeng/primeng';

@Component({
  selector: 'app-create-branch',
  templateUrl: './create-branch.component.html',
  styleUrls: ['../../../layout.component.scss', './create-branch.component.css'],
  animations: [routerTransition()],
  encapsulation: ViewEncapsulation.None
})
export class CreateBranchComponent implements OnInit {
  errorMessage: string = "Unexpected error encountered.";
  branchDetails: branchDetailsDto = new branchDetailsDto;
  selectedBranchId: string;
  name: string = '';
  address1: string = '';
  address2: string = '';
  city: string = '';
  state: string = '';
  zipcode: string = '';
  country: string = '';
  email: string = '';
  contactNumber: string = '';
  opensAt: string = '';
  closesAt: string = '';
  latitude: number;
  longitude: number;
  isSubmitted: boolean = false;
  private alerts: Array<any> = [];

  constructor(
    private branchesService:BranchesService,
    private layoutService:LayoutService,
    private modalService: NgbModal,     
    private router: Router) { }

  ngOnInit() {}


  private createBranch(){
    let param = [];
    param.push({
      "address":{
        "address1":this.address1,
        "address2": this.address2,
        "city": this.city,
        "state": this.state,
        "zipcode": this.zipcode,
        "country": this.country,
        "location": {
          "latitude": this.latitude,
          "longitude": this.longitude
        }
      },
      "contactNumbers": [
        this.contactNumber
      ],
      "name": this.name,
      "email": this.email,
      "openAt": this.opensAt,
      "closesAt": this.closesAt,
    });
    
    this.saveBranch(param[0]);
      
  }

  private saveBranch(branchDetails){
    this.isSubmitted = true;
    this.branchesService.createBranch(branchDetails).subscribe(
      data => {
        if(!this.isEmpty(data)){
          this.successMessage('Branch successfully added.');

          setTimeout(()=>{
            this.closeActiveAlert();
            this.router.navigateByUrl('branches');  
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

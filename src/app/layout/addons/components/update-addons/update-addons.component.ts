import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { AddonsService } from '../../../addons/services/addons.service';
import { LayoutService } from '../../../layout.service';
import { addonsDetailsDto } from '../../../addons/model/addons.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-addons',
  templateUrl: './update-addons.component.html',
  styleUrls: ['../../../layout.component.scss', './update-addons.component.css'],
  animations: [routerTransition()],
  encapsulation: ViewEncapsulation.None
})
export class UpdateAddonsComponent implements OnInit {
  loading: boolean = false;
  errorMessage: string = "Unexpected error encountered.";
  addonsDetails: addonsDetailsDto = new addonsDetailsDto;
  selectedAddonsId: string;
  price: number;
  description: string = '';

  private alerts: Array<any> = [];

  constructor(
    private addonsService:AddonsService, 
    private layoutService:LayoutService, 
    private modalService: NgbModal, 
    private activatedRoute: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    this.loading = true;
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.selectedAddonsId = params['id'];
      this.readAddons(this.selectedAddonsId);
    });

  }

  private readAddons(selectedAddonsId){
    this.addonsService.readAddons(selectedAddonsId).subscribe(
      data => {

        console.log(data);
        
        this.description = data.description;
        this.price = data.price;
        
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

  private updateAddons(){
    let param = [];

    param.push({
      "description": this.description,
      "price":this.price
    });

    this.saveAddons(param[0]);
  }

  private saveAddons(addonsDetails){
    this.addonsService.updateAddons(addonsDetails, this.selectedAddonsId).subscribe(
      data => {
        if(!this.isEmpty(data)){
          this.successMessage('Addons successfully updated.');

          setTimeout(()=>{
            this.closeActiveAlert();
            this.router.navigateByUrl('addons');  
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

import { Component, OnInit, ViewEncapsulation, ViewChild, Pipe, PipeTransform, Renderer, ElementRef } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { BranchesService } from '../../../branches/services/branches.service';
import { LayoutService } from '../../../layout.service';
import { branchDetailsDto } from '../../../branches/model/branches.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
//import {INgxMyDpOptions, IMyDateModel} from 'ngx-mydatepicker';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['../../../layout.component.scss', './branches.component.css'],
  animations: [routerTransition()],
  encapsulation: ViewEncapsulation.None
})

export class BranchesComponent implements OnInit {
  errorMessage: string = "Unexpected error encountered.";
  //branchDetails: branchDetailsDto = new branchDetailsDto;
  loading: boolean = false;
  closeResult: string;
  branches: any [] = [];
  branchesCount = 0;
  selectedBranchDetails: any;
  private alerts: Array<any> = [];
  
  translations;
  dtBranchesResource;

  @ViewChild(DataTable) branchesTable:DataTable;

    constructor(
      private branchesService:BranchesService, 
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
      this.getBranches();
    }
    
    private getBranches(){
      this.loading = true;
      this.branchesService.getBranches().subscribe(
        data => {
          

          if(data != undefined){
            this.branches = data;
            this.dtBranchesResource = new DataTableResource(this.branches);
            this.dtBranchesResource.count().then(count => this.branchesCount = count);
            this.branchesTable.reloadItems();

            this.loading = false;
          }
        }, err => {
          console.log(err)
      });
    }

    reloadBranches(params) {
      if(this.dtBranchesResource != undefined){
        this.dtBranchesResource.query(params).then(branches => this.branches = branches);
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

  private getBranchDetailsRow(id) {
    this.branches.forEach((item, index) => {
        if(item.branchId == id){

          this.selectedBranchDetails = this.branches[index];
          return false;
        }
    });
  }

  private deleteBranchDetailsRow(id){
    if(confirm("Are you sure you want to archive this branch?")){
      this.deleteBranch(id);
    }
  }

  private deleteBranch(id){
    this.branchesService.deleteBranch(id).subscribe(
      data => {
        if(!this.isEmpty(data)){
          this.successMessage('Branch successfully archived.');
          setTimeout(()=>{
            this.closeActiveAlert();
            this.getBranches();
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

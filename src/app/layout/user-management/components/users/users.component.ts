import { Component, OnInit, ViewEncapsulation, ViewChild, Renderer, ElementRef } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { UserManagementService } from '../../../user-management/services/user-management.service';
import { LayoutService } from '../../../layout.service';
import { userDetailsDto } from '../../../user-management/model/user-management.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['../../../layout.component.scss', './users.component.css'],
  animations: [routerTransition()],
  encapsulation: ViewEncapsulation.None
})

export class UsersComponent implements OnInit {
  errorMessage: string = "Unexpected error encountered.";
  userDetails: userDetailsDto = new userDetailsDto;
  loading: boolean = false;
  closeResult: string;
  users: any [] = [];
  usersCount = 0;
  selectedUserDetails: any;
  private alerts: Array<any> = [];

  translations;
  dtUsersResource;

  @ViewChild(DataTable) usersTable:DataTable;
  
  constructor(
    private userManagementService:UserManagementService, 
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
    this.getUsers();
  }
    
  private getUsers(){
    this.loading = true;
    this.layoutService.getUsers().subscribe(
      data => {
        if(data != undefined){
          this.users = data;
          this.dtUsersResource = new DataTableResource(this.users);
          this.dtUsersResource.count().then(count => this.usersCount = count);
          this.usersTable.reloadItems();

          this.loading = false;
        }
      }, err => {
        console.log(err)
    });
  }

  reloadUsers(params) {
    if(this.dtUsersResource != undefined){
      this.dtUsersResource.query(params).then(users => this.users = users);
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

  private getUserDetailsRow(id) {
    this.users.forEach((item, index) => {
        if(item.userId == id){

          console.log('id',id);
          console.log('item.id',item.userId);

          this.selectedUserDetails = this.users[index];
          return false;
        }
    });
  }

  private deleteUserDetailsRow(id){
    if(confirm("Are you sure you want to archive this user?")){
      this.deleteUser(id);
    }
  }

  private deleteUser(id){
    this.userManagementService.deleteUser(id).subscribe(
      data => {
        if(!this.isEmpty(data)){
          this.successMessage('User successfully archived.');
          setTimeout(()=>{
            this.closeActiveAlert();
            this.getUsers();
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

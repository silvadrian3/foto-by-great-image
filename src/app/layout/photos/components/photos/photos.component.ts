import { Component, OnInit, ViewEncapsulation, ViewChild, Pipe, PipeTransform } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { PhotosService } from '../../../photos/services/photos.service';
import { ActiveBookingsService } from '../../../active-bookings/services/active-bookings.service';
import { LayoutService } from '../../../layout.service';
import { BookingDto } from '../../../active-bookings/model/active-bookings.model';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
//import {INgxMyDpOptions, IMyDateModel} from 'ngx-mydatepicker';
import { DatePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['../../../layout.component.scss', './photos.component.css'],
  animations: [routerTransition()],
  encapsulation: ViewEncapsulation.None
})
export class PhotosComponent implements OnInit {
  errorMessage: string = "Unexpected error encountered.";
  loading: boolean = false;
  loadingPhotos: boolean = false;
  closeResult: string;
  bookingId: string;
  bookings: any [] = [];
  selectedBookingPhotos: any;
  selectedPhoto: any;
  selectedFile: File =  null;
  selectedFilesCnt: number;
  uploadedFilesCnt: number = 0;
  private alerts: Array<any> = [];
  private modalAlerts: Array<any> = [];
  modalReference: NgbModalRef;
  panelOpenState = false;
  loggedUserBranch: string = localStorage.getItem('loggedUserBranch');

  constructor(
    private PhotosService:PhotosService,
    private activeBookingsService:ActiveBookingsService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.bookings = [];
    this.selectedBookingPhotos = [];
    this.getBooking();
  }

  onFileSelected(event, bookingId){
    
    //this.selectedFile = <File>event.target.files[0];

    if (event.target.files.length > 10){
      alert("You are only allowed to upload a maximum of 10 files");
      return false;
   } else {
    this.loading = true;
    for(this.selectedFilesCnt = 0; this.selectedFilesCnt < event.target.files.length; this.selectedFilesCnt++){
      this.selectedFile = <File>event.target.files[this.selectedFilesCnt];
      this.onUpload(this.selectedFile, bookingId);
    }
   }

    
  }

  private getBooking(){
    this.loading = true;
    this.PhotosService.getCompletedBookings(this.loggedUserBranch).subscribe(
      data => {
        console.log(data);
        this.bookings = data;
        this.loading = false;
        
      }, err => {
        console.log(err)
    });
  }

  private callFetchPhotos(bookingId){
    this.loadingPhotos = true;
    console.log('callFetchPhotos');
    this.selectedBookingPhotos = [];
    this.PhotosService.readBookingPhotos(bookingId).subscribe(
      data => {
        this.selectedBookingPhotos = data;
        this.loadingPhotos = false;
      }, err => {
        console.log(err)
    });
    
  }

  open(content) {

    this.modalReference = this.modalService.open(content,  {'size': 'lg', backdrop: 'static', keyboard: false});
    
    this.modalReference.result.then((result) => {
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

  private getPhotoDetailsRow(id) {
    console.log('selected id' + id);
    this.selectedBookingPhotos.forEach((item, index) => {
        if(item.photoId == id){
          console.log('each booking ID: ' + item.photoId);
          console.log(this.selectedBookingPhotos[index]);
          this.selectedPhoto = this.selectedBookingPhotos[index];
          return false;
        }
    });
  }
  
  onUpload(selectedFile, bookingId) {
    this.loading = true;
    this.PhotosService.createPhoto(selectedFile, bookingId).subscribe(data => {

      if(data != undefined){
        console.log(data);
        
        if(!this.isEmpty(data)){
          this.uploadedFilesCnt++;
          if(this.selectedFilesCnt == this.uploadedFilesCnt){
            this.successMessage('File successfully uploaded.');

            setTimeout(()=>{
              this.closeActiveAlert(); 
              this.callFetchPhotos(bookingId); 
            }, 3000);

            this.loading = false;
          }
          
        } else {
          this.errMessage(this.errorMessage);
        }
      }
    });
    
  }

  onDownloadPhoto(photoUrl: string){
    console.log(photoUrl);


    this.PhotosService.downloadPhoto(photoUrl).subscribe(
      (res) => {
        const fileURL = URL.createObjectURL(res);
        //window.location.href = fileURL;
      }
    );
  }

  private deletePhoto(id, bookingId, src){

    if(confirm("Are you sure you want to delete this photo?")){
      this.PhotosService.deletePhoto(id, bookingId).subscribe(
        data => {

          console.log('result', data);

          if(!this.isEmpty(data)){
            if(src == 'modal') {
              this.successModalMessage('Photo successfully archived.');
              setTimeout(()=>{
                this.modalReference.close();
                this.closeActiveModalAlert();
                this.callFetchPhotos(bookingId);
              }, 3000);
            }   
          } else {
            this.errMessage(this.errorMessage);
          }
          
        }, err => {
          console.log(err)
      });
    }
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

  private successModalMessage(msg){
    this.closeActiveModalAlert();
    
    setTimeout(()=>{
      this.modalAlerts.push({
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

  private closeModalAlert(modalAlerts: any) {    
    const index: number = this.modalAlerts.indexOf(alert);
    this.modalAlerts.splice(index, 1);
  }

  private closeActiveAlert(){
    this.alerts.splice(0, 1);
  }

  private closeActiveModalAlert(){
    this.modalAlerts.splice(0, 1);
  }

  private isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

}

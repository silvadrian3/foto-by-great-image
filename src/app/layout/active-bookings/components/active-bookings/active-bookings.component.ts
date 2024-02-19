import { Component, OnInit, ViewEncapsulation, ViewChild, Renderer, ElementRef  } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Router} from '@angular/router';
import { ActiveBookingsService } from '../../../active-bookings/services/active-bookings.service';
import { PhotosService } from '../../../photos/services/photos.service';
import { LayoutService } from '../../../layout.service';
//import { BookingDto } from '../../../active-bookings/model/active-bookings.model';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-active-bookings',
  templateUrl: './active-bookings.component.html',
  styleUrls: ['../../../layout.component.scss', './active-bookings.component.css'],
  animations: [routerTransition()],
  encapsulation: ViewEncapsulation.None
})

export class ActiveBookingsComponent implements OnInit {
  errorMessage: string = "Unexpected error encountered.";
  loading: boolean = false;
  loadingSpinner: boolean = false;
  closeResult: string;
  bookings: any [] = [];
  bookingsCount = 0;
  selectedBookingDetails: any;
  modalReference: NgbModalRef;
  opt_photographers: any [] = [];
  photographer: string = "";
  lbl_photographer: string = "";
  loggedUserBranch: string = localStorage.getItem('loggedUserBranch');
  bookingId: string;
  selectedBookingPhotos: any [] = [];
  selectedPhoto: any;
  selectedFile: File =  null;
  selectedFiles: any;
  selectedFilesCnt: number;
  uploadedFilesCnt: number = 0;
  
  private alerts: Array<any> = [];
  private modalAlerts: Array<any> = [];

  mapType = 'roadmap'; //or satellite
  mapZoom = 18;

  dtTranslations;
  dtBookingsResource;

  @ViewChild(DataTable) bookingsTable:DataTable;

  constructor(
    private activeBookingsService:ActiveBookingsService, 
    private PhotosService:PhotosService,
    private layoutService:LayoutService, 
    private modalService: NgbModal,
    private router: Router,
    private renderer: Renderer, private elem: ElementRef,
    private spinner: NgxSpinnerService
  ) {
    this.dtTranslations = <DataTableTranslations>{
      indexColumn: '#',
      expandColumn: 'Expand column',
      selectColumn: 'Select column',
      paginationLimit: 'Limit',
      paginationRange: 'Results',
      rowExpandMode: 'single'
    }

    console.log(this.loggedUserBranch);
  }

  ngOnInit() {
    this.getBookings();
  }

  private getBookings(){
    this.closeActiveAlert();
    this.closeActiveModalAlert();
    this.loading = true;
    this.spinner.hide();
    this.loadingSpinner = false;

    this.activeBookingsService.getBookings(this.loggedUserBranch).subscribe(
      data => {
        console.log(data);
        if(data != undefined){
          this.bookings = data;
          this.dtBookingsResource = new DataTableResource(this.bookings);
          this.dtBookingsResource.count().then(count => this.bookingsCount = count);
          this.bookingsTable.reloadItems();
          this.getPhotographers();
          this.loading = false;
        }
      }, err => {
        console.log(err)
    });
  }

  reloadBookings(params) {
    if(this.dtBookingsResource != undefined){
      this.dtBookingsResource.query(params).then(bookings => this.bookings = bookings);
    }
  }

  expandRow(evt) {
    evt.row.expanded = !evt.row.expanded;
    this.readBookings(evt);
  }
  
  open(content) {
    this.closeActiveAlert();
    this.closeActiveModalAlert();

    this.modalReference = this.modalService.open(
      content, {'size': 'lg', backdrop: 'static', keyboard: false}
    );
    
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

  /**
  private getBookingDetailsRow(id) {
    this.photographer = "";
    this.lbl_photographer = "";
    this.bookings.forEach((item, index) => {
        if(item.bookingId == id){
          
          this.selectedBookingDetails = this.bookings[index];
          console.log(this.selectedBookingDetails);
          return false;
        }
    });
  }
  */
  
  private acceptRequest(id, src){
    
    if(this.photographer == ""){

      alert("Please assign a Photographer.");
      
    } else { 

      if(confirm("Are you sure you want to accept this request?")){
        this.activeBookingsService.acceptBooking(id, this.photographer).subscribe(
          data => {
      
            console.log(data);
            if(!this.isEmpty(data)){
              if(src == 'row'){
                this.successMessage('Booking successfully accepted.');
                setTimeout(()=>{
                  this.closeActiveAlert();
                  this.getBookings();
                }, 3000);
              } else if(src == 'modal') {
                this.successModalMessage('Booking successfully accepted.');
                setTimeout(()=>{
                  this.modalReference.close();
                  this.closeActiveModalAlert();
                  this.getBookings();
                }, 3000);
              }
              
            } else {
              this.errMessage(this.errorMessage);
            }
          }, err => {
            console.log(err)
          if(src == 'row'){
            this.errMessage(this.errorMessage);
          } else if(src == 'modal') {
            this.errModalMessage(this.errorMessage);
          }
        });
  
        
        
      }
    }
    
  }


  private completeRequest(id, src){
    if(confirm("Are you sure you want to complete this request?")){

      this.activeBookingsService.completeBooking(id).subscribe(
        data => {
    
          if(!this.isEmpty(data)){
            console.log(data);
            if(src == 'row'){
              this.successMessage('Booking successfully completed');
              setTimeout(()=>{
                this.closeActiveAlert();
                this.getBookings();
              }, 3000);
            } else if(src == 'modal') {
              this.successModalMessage('Booking successfully completed.');
              setTimeout(()=>{
                this.modalReference.close();
                this.closeActiveModalAlert();
                this.router.navigateByUrl('photos?bookingId=' + id);  
              }, 3000);
            }
            
          } else {
            this.errMessage(this.errorMessage);
          }
        }, err => {
          console.log(err)
          if(src == 'row'){
            this.errMessage(this.errorMessage);
          } else if(src == 'modal') {
            this.errModalMessage(this.errorMessage);
          }
      });
    }
  }

  /**
  private redirectToUploadPhoto(id){
    this.modalReference.close();
    this.router.navigateByUrl('photos?bookingId=' + id);  
  }
  */

  private declineRequest(id, src){
    if(confirm("Are you sure you want to decline this request?")){

      this.activeBookingsService.declineBooking(id).subscribe(
        data => {
    
          if(!this.isEmpty(data)){
            console.log(data);
            if(src == 'row'){
              this.successMessage('Booking successfully declined');
              setTimeout(()=>{
                this.closeActiveAlert();
                this.getBookings();
              }, 3000);
            } else if(src == 'modal') {
              this.successModalMessage('Booking successfully declined.');
              setTimeout(()=>{
                this.modalReference.close();
                this.closeActiveModalAlert();
                this.getBookings();
              }, 3000);
            }
            
          }
        }, err => {
          console.log(err)
          if(src == 'row'){
            this.errMessage(this.errorMessage);
          } else if(src == 'modal') {
            this.errModalMessage(this.errorMessage);
          }
      });
    }
  }

  private getPhotographers(){    
    this.lbl_photographer = "";
    this.layoutService.getUsers().subscribe(
      data => {
        this.opt_photographers = [];
        data.forEach((item, index) => {
          
          if(item.role.toLowerCase() == "photographer"){
            this.opt_photographers.push(data[index]);
            // if(item.email == this.selectedBookingDetails.photographerEmail){
            //   this.lbl_photographer = data[index].firstName + ' ' + data[index].lastName;
            // }
          }
        });
      }, err => {
        console.log(err)
    });
  }

  private readBookings(bookingId){
    console.log(bookingId);
  }



// Start - Photo

  private callFetchPhotos(bookingId){

    this.loadingSpinner = false;
    this.spinner.hide();
    
    console.log('callFetchPhotos', bookingId);
    //this.selectedBookingPhotos = [];
    this.PhotosService.readBookingPhotos(bookingId).subscribe(
      data => {

        let checkExists = false;
        this.selectedBookingPhotos.forEach((item, index) => {
          if(item.selectedBookingId == bookingId){
            this.selectedBookingPhotos[index].data = [];  
            //checkExists = true;
            return false;
          }
        });

        // if(!checkExists){
          this.selectedBookingPhotos.push({ 
            "selectedBookingId": bookingId,
            "data": data
          });

          console.log(this.selectedBookingPhotos);
          
        // }
        
      }, err => {
        console.log(err)
    }); 
  }

  private getPhotoDetailsRow(photoId, bookingId) {
    this.selectedBookingPhotos.forEach((booking, bookingIndex) => {
      if(booking.selectedBookingId == bookingId){
        this.selectedBookingPhotos[bookingIndex].data.forEach((eachBooking, photoIndex) => {
          if(eachBooking.photoId == photoId){
            this.selectedPhoto = this.selectedBookingPhotos[bookingIndex].data[photoIndex];
            return false;
          }
        });
        return false;
      }
    });
  }

  
  onFileSelected(event, bookingId){
    
    this.selectedFiles = <File>event.target.files;

    //if (event.target.files.length > 10){
      //alert("You are only allowed to upload a maximum of 10 files");
      //return false;
   //} else {
    
   //this.loading = true;

   this.loadingSpinner = true;
   this.spinner.show();

    for(this.selectedFilesCnt = 0; this.selectedFilesCnt < event.target.files.length; this.selectedFilesCnt++){
      this.selectedFile = <File>event.target.files[this.selectedFilesCnt];
      this.onUpload(this.selectedFile, bookingId);
    }


   
  }
 
  onUpload(selectedFile, bookingId) {
    console.log('func onUpload');
    
    //this.loading = true;
    this.PhotosService.createPhoto(selectedFile, bookingId).subscribe(data => {

      if(data != undefined){
        if(!this.isEmpty(data)){
          

          if(data.status == 'uploading'){
            this.spinner.show();
            this.loadingSpinner = true;
            console.log('Progress => ', data.progress);

            //this.progressPercentage = data.progress;
            //this.ngProgress.set(data.progress);
          } else if (data.status == 'completed'){

          console.log(data);
            // console.log(data.return);
            //this.spinner.hide();
            //this.loadingSpinner = false;

          } else {

            if(data.status == 200){
              this.spinner.hide();
              this.loadingSpinner = false;
              console.log('Returned data on upload: #' + this.uploadedFilesCnt + ' ',  data);
              this.uploadedFilesCnt++;

              //this.ngProgress.done();

              //console.log(this.uploadedFilesCnt, data);
              //this.callFetchPhotos(bookingId); 

              this.selectedBookingPhotos.forEach((item, index) => {
          
                if(item.selectedBookingId == bookingId){
      
                  this.selectedBookingPhotos[index].data.push(data.body);
                  //checkExists = true;      
                  return false;
                }
              });

              /**
              if(this.selectedFilesCnt == this.uploadedFilesCnt){
                this.successMessage('File successfully uploaded.');

                setTimeout(()=>{
                  this.closeActiveAlert(); 
                  this.callFetchPhotos(bookingId); 
                }, 3000);

                this.loading = false;
              }
              */
              
              
            } else {
              console.log('error', data);
              this.errMessage(this.errorMessage);
            }
        }

          
          
        } else {
          this.errMessage(this.errorMessage);
        }
      }
    });
  }

  /**
  onDownloadPhoto(photoUrl: string){
    console.log(photoUrl);
    this.PhotosService.downloadPhoto(photoUrl).subscribe(
      (res) => {
        const fileURL = URL.createObjectURL(res);
        //window.location.href = fileURL;
      }
    );
  }
  */

 private deletePhoto(id, bookingId, src){

  if(confirm("Are you sure you want to delete this photo?")){
    this.PhotosService.deletePhoto(id, bookingId).subscribe(
      data => {
        if(!this.isEmpty(data)){
          if(src == 'modal') {
            this.successModalMessage('Photo successfully archived.');
            setTimeout(()=>{
              this.modalReference.close();
              this.closeActiveModalAlert();

              /**
              this.selectedBookingPhotos.forEach((booking, bookingIndex) => {
                if(booking.selectedBookingId == bookingId){

                  console.log('bookingIndex', bookingIndex);
                  this.selectedBookingPhotos[bookingIndex].data.forEach((eachBooking, photoIndex) => {
                    if(eachBooking.photoId == id){
                      this.selectedPhoto = this.selectedBookingPhotos[bookingIndex].data[photoIndex];
                      if (photoIndex !== -1) {
                        this.selectedBookingPhotos[bookingIndex].data.splice(photoIndex, 1);
                      }

                      return false;
                    }   
                  });
                  return false;
                }
              });
              */
              
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

  // End - Photo

  private errMessage(msg){
    this.closeActiveAlert();
    this.alerts.push({
      id: 1,
      type: 'danger',
      message: msg
    });
    
    return false;
  }

  private errModalMessage(msg){
    this.closeActiveModalAlert();
      this.modalAlerts.push({
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

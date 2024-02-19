import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/throw';

@Injectable()
export class PhotosService {
  env = environment.envName.toLocaleLowerCase();
  baseUrl = environment.baseUrl;
  apiPath = environment.apiPath;
  
    constructor(public http:Http, public httpClient:HttpClient) { }

    createPhoto(param: File, bookingId) {
      
      console.log('createPhoto');
      let path:string = '',
      options = new RequestOptions({ headers: this.getHeaders() }),
      query:string = '',
      result:any = [];

      const formData: FormData = new FormData();
      formData.append('file', param, param.name);

      if(this.env == 'local'){
        result = Observable.of({result: true});
        return result;
      } else {
        path = "/bookings/"+ bookingId + "/photos";
        query = this.baseUrl + this.apiPath + path;

        //console.log(query);
        return this.httpClient.post(query, formData, {
          reportProgress: true,
          observe: 'events'
        }).map(event => {
          //console.log(query);

          let result = {};

          if(event.type === HttpEventType.UploadProgress){

            if(Math.round(event.loaded / event.total * 100) == 100){
              console.log('Upload Completed');
              result = {
                'status': 'completed',
                'return': event
              };

            } else {
              const loaded = event.loaded,
              total = event.total,
              progress = Math.round(loaded / total * 100);

              result = {
                'status': 'uploading',
                'total': total,
                'loaded': loaded,
                'progress': progress
              };
            }

            return result;

          } else if (event.type === HttpEventType.Response){
            console.log('Request Completed!');
            return event;
          }
        
        });

      }
    }


    // downloadPhoto(imageUrl: string){
    //   return this.http.get(encodeURI(imageUrl))
    //     .map((res) => {
    //       return new Blob([res['body']], {type: res.headers.get('Content-Type')});
    //     })
    // }

    downloadPhoto(imageUrl) {
      let path:string = '',
        options = new RequestOptions({ headers: new Headers({ 
            "Access-Control-Allow-Origin": "*",
            "Content-type": "image/*",
            "Content-Disposition": "attachment; filename=adrian.png"
          })
        }),
        query:string = '',
        result;

      return this.http.get(imageUrl+"?alt=media", options)
        .map((res) => {
          console.log(res);
          //return new Blob([res.body], {type: res.headers.get('Content-Type')});
        })
    }


    getCompletedBookings(loggedUserBranch) {
      let path:string = '',
        options = new RequestOptions({ headers: this.getHeaders() }),
        query:string = '',
        result;
  
      if(this.env == 'local'){
        path = "/bookings.json";
      } else {
        if(loggedUserBranch != "null" && loggedUserBranch != "undefined"){
          path = "/bookings/?branchId=" + loggedUserBranch + "&status=COMPLETED";
        } else {
          path = "/bookings/?status=COMPLETED";
        }
      } 
  
      query = this.baseUrl + this.apiPath + path;
      result = this.http.get(encodeURI(query)).map(res => res.json());
  
      return result;
    }

    readBookingPhotos(id) {
      
      let path:string = '',
        options = new RequestOptions({ headers: this.getHeaders() }),
        query:string = '',
        result;
  
      if(this.env == 'local'){
        path = "/read-booking-photos.json";
      } else {
        path = "/bookings/" + id + "/photos?status=ACTIVE";
      }
  
      query = this.baseUrl + this.apiPath + path;
      result = this.http.get(encodeURI(query)).map(res => res.json());
      return result;
    }

    /**
    updateUser(param) {
      //let query = this.baseUrl + "/user-management.update.php";
      let query = "http://www.quisi.net/mycape-test-api/user-management.update.php";
      return this.http.put(query, param, { headers: this.getHeaders()}).map((response: Response) => response.json());
    } 
    */

    deletePhoto(id, bookingId){
      let path:string = '',
        options = new RequestOptions({ headers: this.getHeaders() }),
        query:string = '',
        result;
  
      if(this.env == 'local'){
        result = Observable.of({result: true});
      } else {
        path = "/bookings/" + bookingId + "/photos/" + id;
        query = this.baseUrl + this.apiPath + path;

        console.log(query);
        result = this.http.delete(encodeURI(query)).map(res => res.json());
      }
  
      return result;

    }

    getHeaders() {
      return  new Headers({ 
        "Access-Control-Allow-Origin": "*",
        "Content-Type" : "application/json" 
      });
    }
  
    _errorHandler(error: Response) {
      console.error(error);
      return Observable.throw(error || "Server Error");
    }
  
  }

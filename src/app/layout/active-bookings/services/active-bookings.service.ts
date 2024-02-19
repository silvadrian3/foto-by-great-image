import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/throw';

@Injectable()
export class ActiveBookingsService {
  env = environment.envName.toLocaleLowerCase();
  baseUrl = environment.baseUrl;
  apiPath = environment.apiPath;

  constructor(public http:Http) { 
    console.log('env: ', this.env);
    console.log('service: ', this.baseUrl);
  }

  getBookings(loggedUserBranch) {
    let path:string = '',
      options = new RequestOptions({ headers: this.getHeaders() }),
      query:string = '',
      result;

    if(this.env == 'local'){
      path = "/bookings.json";
    } else {

      if(loggedUserBranch != null && loggedUserBranch != "undefined"){
        path = "/bookings/?branchId=" + loggedUserBranch;
      } else {
        path = "/bookings/";
      }
      
    } 

    query = this.baseUrl + this.apiPath + path;
    console.log(query);
    result = this.http.get(encodeURI(query)).map(res => res.json());

    return result;
  }

  readBooking(id) {
    let path:string = '',
      options = new RequestOptions({ headers: this.getHeaders() }),
      query:string = '',
      result;

    if(this.env == 'local'){
      path = "/read-booking.json";
    } else {
      path = "/bookings/" + id;
    }

    query = this.baseUrl + this.apiPath + path;
    

    result = this.http.get(encodeURI(query)).map(res => res.json());
    return result;
  }

  acceptBooking(bookingId, photographerEmail) {
    let path:string = '',
      options = new RequestOptions({ headers: this.getHeaders() }),
      query:string = '',
      result;

    if(this.env == 'local'){
      result = Observable.of({result: true});
    } else {
      path = "/bookings/" + bookingId + "/approve/?photographerEmail=" + photographerEmail;
      query = this.baseUrl + this.apiPath + path;

      console.log(encodeURI(query));
      
      result = this.http.put(encodeURI(query), options).map(
        (res: Response) => res.json()
      );
    }
    return result;
  }

  declineBooking(bookingId) {
    let path:string = '',
      options = new RequestOptions({ headers: this.getHeaders() }),
      query:string = '',
      result;

    if(this.env == 'local'){
      result = Observable.of({result: true});
    } else {
      path = "/bookings/" + bookingId + "/decline";
      query = this.baseUrl + this.apiPath + path;

      console.log(encodeURI(query));
      result = this.http.put(encodeURI(query), options).map(
        (res: Response) => res.json()
      );
    }
    return result;
  }


  completeBooking(bookingId){
    let path:string = '',
      options = new RequestOptions({ headers: this.getHeaders() }),
      query:string = '',
      result;

    if(this.env == 'local'){
      result = Observable.of({result: true});
    } else {
      path = "/bookings/" + bookingId + "/complete";
      query = this.baseUrl + this.apiPath + path;

      console.log(encodeURI(query));
      result = this.http.put(encodeURI(query), options).map(
        (res: Response) => res.json()
      );
    }
    return result;
  }

  createBooking(param) {

    let path:string = '',
      options = new RequestOptions({ headers: this.getHeaders() }),
      query:string = '',
      result;

    if(this.env == 'local'){
      result = Observable.of({result: true});
    } else {
      path = "/bookings/";
      query = this.baseUrl + this.apiPath + path;

      result = this.http.post(encodeURI(query), param, options).map(
        (res: Response) => res.json()
      );
    }

    return result;
  }

  getHeaders() {
    return  new Headers({ 
      "Content-Type" : "application/json" 
    });
  }
}

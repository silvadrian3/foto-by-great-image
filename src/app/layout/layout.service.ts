import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/throw';

@Injectable()
export class LayoutService {
  env = environment.envName.toLocaleLowerCase();
  baseUrl = environment.baseUrl;
  apiPath = environment.apiPath;

  constructor(public http:Http) { }

  getUsers() {

    let path:string = '',
      options = new RequestOptions({ headers: this.getHeaders() }),
      query:string = '',
      result;

      if(this.env == 'local'){
        path = "/users.json";
      } else {
        path = "/users/?status=ACTIVE";
      }

      query = this.baseUrl + this.apiPath + path;

      console.log(query);
      result = this.http.get(encodeURI(query)).map(res => res.json());
  
      return result;
  }

  // getCountry(){
  //   return this.http.get("assets/api-dummy-data/country.json").map(res => res.json());
  // }

  // getTimeZone(){
  //   return this.http.get("assets/api-dummy-data/timezone.json").map(res => res.json());
  // }

  getHeaders() {
    return  new Headers({ 
      "Content-Type" : "application/json" 
    });
  }
}

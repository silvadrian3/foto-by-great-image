import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/throw';

@Injectable()
export class PromosService {
  env = environment.envName.toLocaleLowerCase();
  baseUrl = environment.baseUrl;
  apiPath = environment.apiPath;
  
    constructor(public http:Http) { }

    getPromos(){
      let path:string = '',
        options = new RequestOptions({ headers: this.getHeaders() }),
        query:string = '',
        result;

      if(this.env == 'local'){
        path = "/read-product.json";
      } else {
        path = "/promos/?status=ACTIVE";
      } 
      
      query = this.baseUrl + this.apiPath + path;
      result = this.http.get(encodeURI(query)).map(res => res.json());
      return result;
    }

    createPromo(param) {

      console.log(param);
      let path:string = '',
        options = new RequestOptions({ headers: this.getHeaders() }),
        query:string = '',
        result;
  
      if(this.env == 'local'){
        result = Observable.of({result: true});
      } else {
        path = "/promos/?status=ACTIVE";
        query = this.baseUrl + this.apiPath + path;
  
        result = this.http.post(encodeURI(query), param, options).map(
          (res: Response) => res.json()
        );
      }
  
      return result;
    }

    readPromo(id) {
      let path:string = '',
        options = new RequestOptions({ headers: this.getHeaders() }),
        query:string = '',
        result;

      if(this.env == 'local'){
        path = "/read-product.json";
      } else {
        path = "/promos/" + id;
      } 
      
      query = this.baseUrl + this.apiPath + path;
      result = this.http.get(encodeURI(query)).map(res => res.json());
      return result;
    }

    updatePromos(param, id) {
      let path:string = '',
      options = new RequestOptions({ headers: this.getHeaders() }),
      query:string = '',
      result;

    if(this.env == 'local'){
      result = Observable.of({result: true});
    } else {
      path = "/promos/" + id;
      query = this.baseUrl + this.apiPath + path;

      result = this.http.put(encodeURI(query), param, options).map(
        (res: Response) => res.json()
      );
    }

    return result;
    }

    deletePromo(id){
      let path:string = '',
      options = new RequestOptions({ headers: this.getHeaders() }),
      query:string = '',
      result;

      if(this.env == 'local'){
        result = Observable.of({result: true});
      } else {
        path = "/promos/" + id;
        query = this.baseUrl + this.apiPath + path;

        //console.log(query);
        result = this.http.delete(encodeURI(query)).map(
          (res: Response) => res//.json()
        );
      }

      
      return result;

    }

    getHeaders() {
      return new Headers({ 
        "Content-Type" : "application/json" 
      });
    }
  
    _errorHandler(error: Response) {
      console.error(error);
      return Observable.throw(error || "Server Error");
    }
  
  }

import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/throw';

@Injectable()
export class UserManagementService {
  env = environment.envName.toLocaleLowerCase();
  baseUrl = environment.baseUrl;
  apiPath = environment.apiPath;
  
    constructor(public http:Http) { }

    createUser(param) {

      console.log(param);
      let path:string = '',
        options = new RequestOptions({ headers: this.getHeaders() }),
        query:string = '',
        result;
  
      if(this.env == 'local'){
        result = Observable.of({result: true});
      } else {
        path = "/users/";
        query = this.baseUrl + this.apiPath + path;
  
        result = this.http.post(encodeURI(query), param, options).map(
          (res: Response) => res.json()
        );
      }
  
      return result;
    }

    createBranchUser(user_id, branch_id){
      let path:string = '',
        options = new RequestOptions({ headers: this.getHeaders() }),
        query:string = '',
        result;
  
      if(this.env == 'local'){
        result = Observable.of({result: true});
      } else {
        path = "/branchUsers/";
        query = this.baseUrl + this.apiPath + path;
  
        result = this.http.post(encodeURI(query), {
          "branchId": branch_id,
          "userId": user_id,
          "status": "ACTIVE"
        }, options).map(
          (res: Response) => res.json()
        );
      }
  
      return result;
    }

    readUsers(id) {
      let path:string = '',
        options = new RequestOptions({ headers: this.getHeaders() }),
        query:string = '',
        result;

      if(this.env == 'local'){
        path = "/read-user.json";
      } else {
        path = "/users/" + id;
      } 
      
      query = this.baseUrl + this.apiPath + path;
      result = this.http.get(encodeURI(query)).map(res => res.json());
      return result;
    }

    updateUser(param, id) {
      let path:string = '',
      options = new RequestOptions({ headers: this.getHeaders() }),
      query:string = '',
      result;

    if(this.env == 'local'){
      result = Observable.of({result: true});
    } else {
      path = "/users/" + id;
      query = this.baseUrl + this.apiPath + path;

      result = this.http.put(encodeURI(query), param, options).map(
        (res: Response) => res.json()
      );
    }

    return result;
    }

    deleteUser(id){
      let path:string = '',
      options = new RequestOptions({ headers: this.getHeaders() }),
      query:string = '',
      result;

      if(this.env == 'local'){
        result = Observable.of({result: true});
      } else {
        path = "/users/" + id;
        query = this.baseUrl + this.apiPath + path;

        result = this.http.put(encodeURI(query), {"status": "INACTIVE"}, options).map(
          (res: Response) => res.json()
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

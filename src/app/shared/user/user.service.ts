import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/throw';

@Injectable()
export class UserService {
  env = environment.envName.toLocaleLowerCase();
  baseUrl = environment.baseUrl;
  apiPath = environment.apiPath;

  private userfirstname;
  private userlastname;
  private usertype;
  private userId;
  private userBranch;

  constructor(public http:Http) { }

  setLoggedInUserId(id) {
    this.userId = id;
  }

  setLoggedInUserType(type) {
    this.usertype = type;
  }

  setLoggedInUserName(fname, lname){
    this.userfirstname = fname;
    this.userlastname = lname;
  }

  setLoggedInBranch(branch) {
    this.userBranch = branch;
  }

  getLoggedInUserId() {
    return this.userId;
  }

  getLoggedInUserType() {
    return this.usertype;
  }

  getLoggedInUserName() {
    return this.userfirstname + ' ' + this.userlastname;
  }

  getLoggedInUserBranch() {
    return this.userBranch;
  }
  
  createUser(param) {
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

  login(email, password){
    let path:string = '',
      options = new RequestOptions({ headers: this.getHeaders() }),
      query:string = '',
      result;

    if(this.env == 'local'){
      result = Observable.of({result: true});
    } else {
      path = "/admin/login";
      query = this.baseUrl + this.apiPath + path;

      result = this.http.post(encodeURI(query), {"email": email, "password": password}).map(
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

  _errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || "Server Error");
  }

}

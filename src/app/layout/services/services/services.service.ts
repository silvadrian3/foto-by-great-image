import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/throw';

@Injectable()
export class ServicesService {
  env = environment.envName.toLocaleLowerCase();
  baseUrl = environment.baseUrl;
  apiPath = environment.apiPath;

  constructor(public http:Http, public httpClient:HttpClient) { 
    console.log('env: ', this.env);
    console.log('service: ', this.baseUrl);
  }
  
  getServices(type = null){
    
    let path:string = '',
      options = new RequestOptions({ headers: this.getHeaders() }),
      query:string = '',
      result;

    if(this.env == 'local'){
      path = "/services.json";
    } else {
      if(type == 'studio'){
        path = "/bookingType/?status=ACTIVE&serviceType=" + type.toLocaleUpperCase();
      } else {
        path = "/bookingType/?status=ACTIVE";
      }
      
    }
    query = this.baseUrl + this.apiPath + path;
    result = this.http.get(encodeURI(query)).map(res => res.json());

    return result;
  }

  readService(id) {
    let path:string = '',
      options = new RequestOptions({ headers: this.getHeaders() }),
      query:string = '',
      result;

    if(this.env == 'local'){
      path = "/read-service.json";
    } else {
      path = "/bookingType/" + id;
    }

    query = this.baseUrl + this.apiPath + path;
    result = this.http.get(encodeURI(query)).map(res => res.json());
    return result;
  }
  
  createService(param) {
    let path:string = '',
      options = new RequestOptions({ headers: this.getHeaders() }),
      query:string = '',
      result;

    if(this.env == 'local'){
      result = Observable.of({result: true});
    } else {
      path = "/bookingType/";
      query = this.baseUrl + this.apiPath + path;

      result = this.http.post(encodeURI(query), param, options).map(
        (res: Response) => res.json()
      );
    }

    return result;
  }
  

  updateService(id, param) {

    console.log('updateService');
    console.log(id);
    console.log(param);

    let path:string = '',
      options = new RequestOptions({ headers: this.getHeaders() }),
      query:string = '',
      result;

    if(this.env == 'local'){
      result = Observable.of({result: true});
    } else {
      path = "/bookingType/" + id;
      query = this.baseUrl + this.apiPath + path;

      result = this.http.put(encodeURI(query), param, options).map(
        (res: Response) => res.json()
      );
    }

    return result;
  }

  deleteService(id){
    let path:string = '',
    options = new RequestOptions({ headers: this.getHeaders() }),
    query:string = '',
    result;

    if(this.env == 'local'){
      result = Observable.of({result: true});
    } else {
      path = "/bookingType/" + id;
      query = this.baseUrl + this.apiPath + path;

      // result = this.http.put(encodeURI(query), {"status": "INACTIVE"}, options).map(
      //   (res: Response) => res.json()
      // );

      result = this.http.delete(encodeURI(query)).map(
        (res: Response) => res//.json()
      );

    }
    return result;
  }

  createPhoto(param: File, directory) {
      
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
      path = "/images?path=" + directory;
      query = this.baseUrl + this.apiPath + path;


      console.log(formData);
      
      return this.httpClient.post(query, formData, {
        reportProgress: true,
        observe: 'events'
      }).map(event => {

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

  getHeaders() {
    return  new Headers({ 
      "Content-Type" : "application/json" 
    });
  }
}

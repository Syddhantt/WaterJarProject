import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http"
import 'rxjs/add/operator/map';
import { Headers } from '@angular/http/src/headers';
@Injectable()
export class HttpService {

  constructor(private http:Http) { }
  
  // public headers = new Headers(
  //   {"Content-Type": ["application/json"],
  //   'Access-Control-Allow-Origin': 'http://localhost:3000' 
  //   , 'Access-Control-Allow-Methods' : 'POST, PUT, DELETE, GET, OPTIONS' 
  //  , 'Access-Control-Request-Method' : 'GET',
  //    'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  // }
  // )
  getCustomerData(){
    return this.http.get('http://localhost:3000/customer').map((res:Response) => res.json());
  }

  getAreaData(){
    return this.http.get('http://localhost:3000/area').map((res:Response) => res.json());
  }

  getItemData(){
    return this.http.get('http://localhost:3000/item').map((res:Response) => res.json());
  }
  setCustomerData(data){
    console.log(data);
    return this.http.post('http://localhost:3000/customer', data).map((res:Response) => res.json());
  }
}

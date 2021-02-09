import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallAPIService {

  constructor(private http: HttpClient) { }

  public get_price_2021(initial_price: number){
    var api_url = 'http://127.0.0.1:5000/get_prediction2021?initial_price='+initial_price;
    return this.http.get(api_url, {observe: 'response'})
  }
  public get_price_future(initial_price: number, age: number){
    var api_url = 'http://127.0.0.1:5000/get_prediction?initial_price='+initial_price+'&iphone_age='+age;
    return this.http.get(api_url, {observe: 'response'})
  }
}

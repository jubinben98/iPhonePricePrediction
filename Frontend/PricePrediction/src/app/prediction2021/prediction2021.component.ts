import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallAPIService } from '../call-api.service';

@Component({
  selector: 'app-prediction2021',
  templateUrl: './prediction2021.component.html',
  styleUrls: ['./prediction2021.component.css']
})
export class Prediction2021Component implements OnInit {
  predicted_price: string;

  constructor(private api_service: CallAPIService, private router: Router) { }

  gotoPage(pagename:string):void{
    this.router.navigate([`${pagename}`]);
  }

  get_prediction(){
    if(<HTMLInputElement>document.getElementById("InitialPrice")){
      var initial_price = (<HTMLInputElement>document.getElementById("InitialPrice")).value
      let response = this.api_service.get_price_2021(parseInt(initial_price));
      response.subscribe(res=>{
        console.log('API Response', res)
        this.predicted_price = "Price Predicted in 2021: "+res.body['PricePredicted']
      })
    }
    else{
      console.log("Enter the Initial Price of iPhone.")
    }
  }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallAPIService } from '../call-api.service';

@Component({
  selector: 'app-future-prediction',
  templateUrl: './future-prediction.component.html',
  styleUrls: ['./future-prediction.component.css']
})
export class FuturePredictionComponent implements OnInit {
  predicted_price: string;
  constructor(private api_service: CallAPIService, private router: Router) { }

  gotoPage(pagename:string):void{
    this.router.navigate([`${pagename}`]);
  }

  get_prediction(){
    if(<HTMLInputElement>document.getElementById("InitialPrice") &&
       <HTMLInputElement>document.getElementById("FutureYear")&&
       <HTMLInputElement>document.getElementById("InitialYear")){

      var initial_price = (<HTMLInputElement>document.getElementById("InitialPrice")).value
      var FutureYear = (<HTMLInputElement>document.getElementById("FutureYear")).value
      var InitialYear = (<HTMLInputElement>document.getElementById("InitialYear")).value
      var age = parseInt(FutureYear) - parseInt(InitialYear)
      if (age >= 1){
        let response = this.api_service.get_price_future(parseInt(initial_price), age);
        response.subscribe(res=>{
        console.log('API Response', res)
        this.predicted_price = "Price Predicted in "+parseInt(FutureYear)+": "+res.body['PricePredicted'];
      })
      }
      else{
        console.log("Enter Years Correctly")  
      }
      
    }
    else{
      console.log("Enter all the fields.")
    }
  }

  ngOnInit(): void {
  }

}

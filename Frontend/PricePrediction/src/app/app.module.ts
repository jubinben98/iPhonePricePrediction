import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FuturePredictionComponent } from './future-prediction/future-prediction.component';
import { Prediction2021Component } from './prediction2021/prediction2021.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FuturePredictionComponent,
    Prediction2021Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

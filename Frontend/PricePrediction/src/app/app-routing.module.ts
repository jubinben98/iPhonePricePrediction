import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuturePredictionComponent } from './future-prediction/future-prediction.component';
import { HomeComponent } from './home/home.component';
import { Prediction2021Component } from './prediction2021/prediction2021.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'future-prediction', component:FuturePredictionComponent},
  {path:'prediction2021', component:Prediction2021Component},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

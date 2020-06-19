import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShipmentlistComponent } from './shipmentlist/shipmentlist.component';
import { from } from 'rxjs';
import { OrderdataService } from './orderdata.service';
import { OrderprogressComponent } from './orderprogress/orderprogress.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: 'order-tracking/:order_id', component: OrderTrackingComponent},
  {path: '', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ShipmentlistComponent,
    OrderprogressComponent,
    OrderTrackingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [OrderdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

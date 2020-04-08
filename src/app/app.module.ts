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



@NgModule({
  declarations: [
    AppComponent,
    ShipmentlistComponent,
    OrderprogressComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [OrderdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

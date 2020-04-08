import { Component } from '@angular/core';
import {OrderdataService} from '../app/orderdata.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trackfynd';
 orderid;
 responseData; 
orderGuide = false;
value = true; 
 d = "./assets/delivery_img@2x.png";
 f = "./assets/fyndlogo@2x.png";
 fs = "./assets/fyndstore_logo@2x.png";
 u = "./assets/uniket_logo@2x.png";
 cClickedshipemnt;

constructor(private service: OrderdataService ) {}

showShipments(orderid){
this.service.getShipment(orderid).subscribe(data =>
this.responseData = data.results); 
this.value = false
}

orderSearch(){
  this.orderGuide = true
}

capShipment(count){
 this.cClickedshipemnt = count 

}



}

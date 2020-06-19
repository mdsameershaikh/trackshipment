import { Component } from '@angular/core';
import { OrderdataService } from '../../app/orderdata.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'trackfynd';
  orderid;
  responseData;
  orderGuide = false;
  value = true;
  loading = false;
  d = "./assets/delivery_img@2x.png";
  f = "./assets/fyndlogo@2x.png";
  fs = "./assets/fyndstore_logo@2x.png";
  u = "./assets/uniket_logo@2x.png";
  // l = "./assets/loader.gif" ;
  l= "https://i.pinimg.com/originals/3f/2c/97/3f2c979b214d06e9caab8ba8326864f3.gif"
  cClickedshipemnt;
  nodisplay = false

  constructor(private service: OrderdataService, private router: Router) { }

myLoad(){
  this.loading = true;
}

  showShipments(orderid) {
    this.service.getShipment(orderid).subscribe(data => {
     this.responseData = data.results;
      if (data.results && data.results.length > 0) {
      //  
        //TODO pass order it to order-tracking.component
        this.router.navigate(['order-tracking/'+orderid]);
      }
      else {
        
        this.orderid = 'incorrect order id';
        this.loading = false


      }
    }
    );
    // this.value = false
  }

  orderSearch() {
    this.orderGuide = true
  }

  capShipment(count) {
    this.cClickedshipemnt = count

  }



}


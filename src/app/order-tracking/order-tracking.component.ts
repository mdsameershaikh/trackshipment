import { Component, OnInit } from '@angular/core';
import {OrderdataService } from '../orderdata.service'
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.css']
})
export class OrderTrackingComponent implements OnInit  {
 
  cClickedshipemnt;
  orderGuide = false;
  responseData
  orderid;
 

  constructor(private service: OrderdataService,
    private route: ActivatedRoute
    ) { }
   

  ngOnInit(): void {
    let authorizationData = 'Basic ' + btoa('fynd' + ':' + "Fynd123");
        let t = this.route.snapshot.paramMap.get('order_id');
        
     
    // alert(t);
    this.orderid = t;
    this.showShipments(this.orderid);
  }


  
    showShipments(orderid) {
      this.service.getShipment(orderid).subscribe(data => { 
        this.responseData = data.results})}

    // capShipment(count) {
    //    count =this.cClickedshipemnt 
  
    // }    

    

  

}

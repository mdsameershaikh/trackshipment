import { Component, OnInit, OnChanges, SimpleChanges,Input } from '@angular/core';
import {OrderdataService} from '../orderdata.service'
@Component({
  selector: 'app-orderprogress',
  templateUrl: './orderprogress.component.html',
  styleUrls: ['./orderprogress.component.css']
})
export class OrderprogressComponent implements OnInit  {
  @Input()clickedShipment;
 progressData;
 items;
 status;
 shipment;
 orange = "./assets/progress_filled@2x.png";
 grey = "./assets/progress_unfilled@2x.png"
 city;
 pincode;
 tacking_no;
 track_url;
  constructor(private service: OrderdataService ) { }
  ngOnInit() {
  }
  getProgressData(clickedShipment){
    this.service.getProgress(clickedShipment).subscribe(data =>{
      this.progressData = data.shipment.tracking_list;
      this.shipment = data.shipment;
        this.items = data.shipment.items;
        this.status = data.shipment.status; 
        this.city = data.shipment.delivery_address.city;
        this.pincode = data.shipment.delivery_address.pincode})}
    
      ngOnChanges(changes: SimpleChanges){
        for (let propName in changes){
          let change = changes[propName];
          let curval = (change.currentValue);
        if(curval !== 0){
         return this.getProgressData(this.clickedShipment)
        }}

      }
}

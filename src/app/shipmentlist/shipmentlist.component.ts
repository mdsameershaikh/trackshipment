import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shipmentlist',
  templateUrl: './shipmentlist.component.html',
  styleUrls: ['./shipmentlist.component.css']
})
export class ShipmentlistComponent implements OnInit {
@Input() orderid;
@Input() responseData
@Output() newShipment  = new EventEmitter();
clickedShipment = 0

  constructor() { }

  ngOnInit(): void {


    //manually call consoleIt function to display data on right side
    this.onShipmentClicked(this.responseData[0].shipment_id);
  }

  onShipmentClicked(d){
   this.clickedShipment = d;
   this.newShipment.emit(this.clickedShipment)

}


}

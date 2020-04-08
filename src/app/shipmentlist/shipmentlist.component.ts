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
  }

consoleIt(d){
   this.clickedShipment = d;
 
}

emitNewShipment(){
  this.newShipment.emit(this.clickedShipment)
}
}

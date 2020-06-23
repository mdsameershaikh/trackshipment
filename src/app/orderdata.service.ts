import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class OrderdataService {
  constructor(private httpClient:HttpClient) { }

 httpOptions = {
   headers: new HttpHeaders({
     'content-Type': 'application/json',
     'Authorization': 'Basic ' + btoa('fynd:Fynd123')
   })
 }

  getShipment(orderid):Observable<any>{
    let url =  "https://workbench.fynd.com/workbench-service/api/v1/hydra/groups/open/apis/shipment_track_ss/execute?order_id="+ orderid;
    return this.httpClient.get(url, this.httpOptions);  }
  getProgress(clickedShipment):Observable<any>{
    let url = "https://api.fynd.com/computron/api/v1/store/shipment-bags/?shipment_id="+clickedShipment;
    return this.httpClient.get(url);
  }
}
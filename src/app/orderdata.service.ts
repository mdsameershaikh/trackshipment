import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class OrderdataService {

  constructor(private httpClient:HttpClient) { }

  
  createAuthorizationHeader(headers: Headers)  {
    headers.append('Authorization', 'Basic ' +
      btoa('fynd:Fynd123')); 
      // check if space is needed 
  }
  
  getShipment(orderid):Observable<any>{
    let headers = new Headers()
    this.createAuthorizationHeader(headers);
    let url =  "https://workbench.fynd.com/workbench-service/api/v1/hydra/groups/open/apis/shipment_track_ss/execute?order_id="+ orderid;
    return this.httpClient.get(url, {
      headers: headers
    });  }

  getProgress(clickedShipment):Observable<any>{
    let url = "https://api.fynd.com/computron/api/v1/store/shipment-bags/?shipment_id="+clickedShipment;
    return this.httpClient.get(url);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../../models/listResponseModel';
import { Car } from '../../models/car/car';


@Injectable({
  providedIn: 'root'
})
export class CarService {
 
  apiUrl= "https://localhost:44355/api/cars/getcardetails";
  
  constructor(private httClient : HttpClient) { }

  getCars() : Observable<ListResponseModel<Car>>
  {
   return this.httClient.get<ListResponseModel<Car>>(this.apiUrl);
  }

}

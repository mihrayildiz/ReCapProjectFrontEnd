import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../../models/car/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
 
  apiUrl= "https://localhost:44355/api/cars/getcardetails";
  
  constructor(private httClient : HttpClient) { }

  getCars() : Observable<CarResponseModel>
  {
   return this.httClient.get<CarResponseModel>(this.apiUrl);
  }

}

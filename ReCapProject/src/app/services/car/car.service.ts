import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../../models/listResponseModel';
import { Car } from '../../models/car/car';


@Injectable({
  providedIn: 'root'
})
export class CarService {
 
  apiUrl= "https://localhost:44355/api/";
  
  constructor(private httClient : HttpClient) { }

  getCars() : Observable<ListResponseModel<Car>>
  {
    let newPath = this.apiUrl + "cars/getcardetails";
   return this.httClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColorId(colorId : number){
    let newPath = this.apiUrl + "cars/getcarsdtobycolorid?colorId=" + colorId;
    return  this.httClient.get<ListResponseModel<Car>>(newPath);

  }
  getCarsByBrandId(brandId : number){
    let newPath = this.apiUrl + "cars/getcarsdtobybrandid?brandId=" + brandId;
    return  this.httClient.get<ListResponseModel<Car>>(newPath);

  }

}

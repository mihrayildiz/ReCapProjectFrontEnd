import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {ListResponseModel} from '../../models/listResponseModel'
import { Brand } from '../../models/brand/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "https://localhost:44355/api/brands/getall";

  constructor(private httpClient : HttpClient) { }


  getBrands(): Observable<ListResponseModel<Brand>>{
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);
  }
}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';


import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarComponent } from './components/car/car.component';

@NgModule({
  declarations: [
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NaviComponent,
    BrandComponent,
    CustomerComponent,
    RentalComponent,
    CarComponent,
    HttpClientModule,
    
    
  ],
  providers: [   ],
  //bootstrap: [AppComponent]
})
export class AppModule { }

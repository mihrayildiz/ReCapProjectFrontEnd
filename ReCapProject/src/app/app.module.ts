import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';


import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';

@NgModule({
  declarations: [
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NaviComponent,
    BrandComponent,
    CustomerComponent,
    RentalComponent,
    HttpClientModule,
    
    
  ],
  providers: [   ],
  //bootstrap: [AppComponent]
})
export class AppModule { }

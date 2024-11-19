import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';


import { NaviComponent } from './components/navi/navi.component';

@NgModule({
  declarations: [
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NaviComponent,
    HttpClientModule,
    
    
  ],
  providers: [   ],
  //bootstrap: [AppComponent]
})
export class AppModule { }

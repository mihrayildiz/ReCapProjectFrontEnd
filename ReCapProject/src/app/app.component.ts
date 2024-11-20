import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from "./components/navi/navi.component";
import { ColorComponent } from './components/color/color.component';
import { HttpClient } from '@angular/common/http';
import { BrandComponent } from "./components/brand/brand.component";
import { CustomerComponent } from "./components/customer/customer.component";
import { RentalComponent } from "./components/rental/rental.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NaviComponent, ColorComponent, BrandComponent, CustomerComponent, RentalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ReCapProject';
}

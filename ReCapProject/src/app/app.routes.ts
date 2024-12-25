import { Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';

export const routes: Routes = [
   { path: '', pathMatch: 'full', component:CarComponent}, // Anasayfa
   // { path: 'cars', component: CarComponent }, 
   {path : 'cars/getcarsdtobycolorid/:colorId', component : CarComponent}
 
];

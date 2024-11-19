import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"cars", component:CarComponent},
  // Diğer yönlendirmeler buraya eklenebilir
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
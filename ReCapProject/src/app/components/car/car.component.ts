import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car/car.service';
import { Car } from '../../models/car/car';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { response } from 'express';
import { VatAddedPipe } from '../../../pipes/vat-added.pipe';
import { FilterPipePipe } from '../../../pipes/filter-pipe.pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule,VatAddedPipe,FilterPipePipe,FormsModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit{
 
  cars : Car[] =[];
  filterText = "";

  constructor(private carService :CarService, private activatedRouted : ActivatedRoute){ }

  ngOnInit(): void {
    
      this.activatedRouted.params.subscribe(params =>{
        if(params["colorId"]){
          this.getCarsByColorId(params["colorId"])
        }
        if(params["brandId"]){
          this.getCarsByBrandId(params["brandId"])
        }
        
        else{
          this.getCars()
        }
      })
      
    }
    
    
   getCars(){
  this.carService.getCars().subscribe(
    response => {this.cars = response.data;})
}

getCarsByColorId(colorId : number){
  this.carService.getCarsByColorId(colorId).subscribe(
    
      response => {this.cars = response.data;})
}

getCarsByBrandId(brandId : number){
  this.carService.getCarsByBrandId(brandId).subscribe(
    
      response => {this.cars = response.data;})
}

}




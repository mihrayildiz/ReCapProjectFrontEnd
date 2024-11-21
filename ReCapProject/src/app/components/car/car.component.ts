import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car/car.service';
import { Car } from '../../models/car/car';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit{
 
  cars : Car[] =[];

  constructor(private carService :CarService){ }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
  this.carService.getCars().subscribe(
    response => {this.cars = response.data;})
}
}

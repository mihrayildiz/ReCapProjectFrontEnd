import { Component, OnInit } from '@angular/core';
import { Rental } from '../../models/rental/rental';
import { RentalService } from '../../services/rental/rental.service';
import { response } from 'express';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rental',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css'
})
export class RentalComponent  implements OnInit {

  rentals : Rental[] =[];

  constructor(private rentalService : RentalService) {}

  ngOnInit(): void {
    this.getRentals();
  }

  getRentals() 
  {
    this.rentalService.getRentals().subscribe( response =>{
      this.rentals = response.data});
    
  }
}

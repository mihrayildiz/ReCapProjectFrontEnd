import { Component,OnInit } from '@angular/core';
import { Brand } from '../../models/brand/brand';
import { BrandService } from '../../services/brand/brand.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent  implements OnInit {

  brands : Brand[] = [];

  constructor(private brandService: BrandService) { } 


  ngOnInit(): void {
    this.getBrands(); 
  }

  getBrands(){
  this.brandService.getBrands().subscribe(
    response => { this.brands = response.data;
    } )    
  }



}

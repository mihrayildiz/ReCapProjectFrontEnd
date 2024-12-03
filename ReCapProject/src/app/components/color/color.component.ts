import { Component, OnInit} from '@angular/core';
import { Color } from '../../models/color/color';
import { ColorService } from '../../services/color/color.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color.component.html',
  styleUrl: './color.component.css'
})
export class ColorComponent implements OnInit{
 
  colors : Color[] = [];

  constructor(private colorService: ColorService) { } //servisi kullanmak için 

ngOnInit(): void {
  this.getColors();  //fonksionu çalıştırdık
}

getColors()
{
  this.colorService.getColors().subscribe(response =>{
    this.colors = response.data;

  })
}}




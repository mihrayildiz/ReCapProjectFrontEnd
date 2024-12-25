import { Component, OnInit} from '@angular/core';
import { Color } from '../../models/color/color';
import { ColorService } from '../../services/color/color.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './color.component.html',
  styleUrl: './color.component.css'
})
export class ColorComponent implements OnInit{
 
  colors : Color[] = [];
  currentColor : Color;

  constructor(private colorService: ColorService) { } //servisi kullanmak için 

ngOnInit(): void {
  this.getColors();  //fonksionu çalıştırdık
}

getColors()
{
  this.colorService.getColors().subscribe(response =>{
    this.colors = response.data;

  })
}

setCurrentColor(color : Color){
 this.currentColor = color;
 
}

getCurrentColorClass(color :Color)
{
  if(this.currentColor == color){
    return "list-group-item active"
  }
    else{
 return "list-group-item"
    }
}


}








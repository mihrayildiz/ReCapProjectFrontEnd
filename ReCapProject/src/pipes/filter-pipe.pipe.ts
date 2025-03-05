import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../app/models/car/car';

@Pipe({
  name: 'filterPipe',
  standalone: true
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Car[], filterText: string): Car[] {
    filterText = filterText? filterText.toLocaleLowerCase() : ""
    return filterText? value.filter((c: Car) => c.carName.toLocaleLowerCase().indexOf(filterText)!== -1)  //eğer var ise yeni bir arraye at yoksa value dönss
    : value;
  }

}

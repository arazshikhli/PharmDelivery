import { Pipe, PipeTransform } from '@angular/core';
import { Drugs } from 'src/app/model/interfaces';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(drugs:Drugs[], name:string): Drugs[] {
    if(!name.trim()){
      return drugs
    }
    return drugs.filter(drug=>{
      return drug.name.toLowerCase().includes(name.toLowerCase())
    })
  }
}
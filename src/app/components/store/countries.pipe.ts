import { Pipe, PipeTransform } from '@angular/core';
import { Drugs } from 'src/app/model/interfaces';

@Pipe({
  name: 'countries'
})
export class CountriesPipe implements PipeTransform {

  transform(drugs:Drugs[], countryList:string[]): Drugs[] {
    if(!countryList){
      return drugs
    }
    return drugs.filter(drug=>{
      return countryList.includes(drug.country.toString())
    })
  }
}

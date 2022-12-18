import { Pipe, PipeTransform } from '@angular/core';
import { Drugs } from 'src/app/model/interfaces';

@Pipe({
  name: 'prescription'
})
export class PrescriptionPipe implements PipeTransform {

  transform(drugs:Drugs[], checker:boolean): Drugs[] {
    if(!checker){
      return drugs
    }
    return drugs.filter(drug=>{
     return drug.byPrescription===true
    })
  }
}

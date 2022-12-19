import { Pipe, PipeTransform } from '@angular/core';
import { Drugs } from 'src/app/model/interfaces';

@Pipe({
  name: 'favorite'
})
export class FavoritePipe implements PipeTransform {

  transform(drug:Drugs[], ): Drugs[] {
    let firstIndex=Math.round(Math.random()*20);
    let secondIndex=firstIndex+8;

    return drug.slice(firstIndex,secondIndex)
  }

}
// transform(drugs:Drugs[], name:string): Drugs[] {
//   if(!name.trim()){
//     return drugs
//   }
//   return drugs.filter(drug=>{
//     return drug.name.toLowerCase().includes(name.toLowerCase())
//   })
// }
// }
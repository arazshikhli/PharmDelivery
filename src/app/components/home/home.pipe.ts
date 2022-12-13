import { Pipe, PipeTransform } from '@angular/core';
import { Drugs } from 'src/app/model/interfaces';

@Pipe({
  name: 'home'
})
export class HomePipe implements PipeTransform {

  transform(drugs:Drugs[]): Drugs[] {
    let num1=Math.round(Math.random()*25)
    let newList=drugs.slice(num1,Math.round(num1+5))
    console.log(num1)
    return newList
  }

}

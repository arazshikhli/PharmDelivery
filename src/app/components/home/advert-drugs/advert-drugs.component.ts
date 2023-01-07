import { Component } from '@angular/core';
import { AdvertDrugService } from './advert-drug.service';

@Component({
  selector: 'app-advert-drugs',
  templateUrl: './advert-drugs.component.html',
  styleUrls: ['./advert-drugs.component.scss']
})
export class AdvertDrugsComponent {
 constructor(public advertDrugService:AdvertDrugService){

 }
}

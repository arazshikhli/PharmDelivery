import { Component, OnInit } from '@angular/core';
import { CartDrug } from 'src/app/model/interfaces';
import { DrugService } from 'src/app/services/drugs.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  switcher:boolean=true;
  cartDrugs=this.drugService.forCart
  constructor(public drugService:DrugService) { }
  result:number

  ngOnInit(): void {

  }
  MinusCount(drugs:CartDrug){
    this.drugService.minusCount(drugs)
  }
  PlusCount(drugs:CartDrug){
   this.drugService.plusCount(drugs)
  }
 
  DeleteDrug(drugs:CartDrug){
    this.drugService.deleteDrugFromCart(drugs)
  }

}

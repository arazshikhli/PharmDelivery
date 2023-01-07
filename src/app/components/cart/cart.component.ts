import { Component, OnInit } from '@angular/core';
import {  Drugs } from 'src/app/model/interfaces';
import { DrugService } from 'src/app/services/drugs.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  switcher:boolean=true;
  cartDrugs:Drugs[]
  constructor(public drugService:DrugService) { }
  result:number

  ngOnInit(): void {
this.cartDrugs=this.drugService.cartDrugList;
  }


  DeleteDrug(drug: Drugs) {
  this.drugService.removeDrug(drug)
  }

  PlusCount(drug: Drugs) {
    this.drugService.quantityPlus(drug)
  }

  MinusCount(drug: Drugs) {
    this.drugService.quantityMinus(drug)
  }
}

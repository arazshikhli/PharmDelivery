import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Drugs, TestDrug } from '../model/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DrugService implements OnInit{
  drugs:Drugs[]=[];
  drugCounter:number;
  result:number
  added:string|null;
   cartDrugList:Drugs[]=[]
  testDrug:TestDrug[]
  constructor(private http:HttpClient,

    ) {
    this.http.get<Drugs[]>('assets/drugs.json').subscribe((response)=>{
      this.drugs=response;
      this.drugCounter=this.drugs.length;
      console.log(this.drugCounter);
      this.http.get<TestDrug[]>('assets/test.json').subscribe((response)=>{
        this.testDrug=response
      })
    })

  }
  getDrugs(){
    return this.http.get<Drugs[]>('assets/drugs.json')
  }
  ngOnInit(){

  }

  public getSum():number{
    let sum=0;
    for(let i=0;i<this.cartDrugList.length;i++){
      sum+=this.cartDrugList[i].quantity
    }
    return sum
  }


  AddToCart(drug:Drugs):boolean{
    if(!this.cartDrugList.includes(drug)){
      drug.quantity+=1;
      this.cartDrugList.push(drug);
      return true
    }
    return false
  }
  removeDrug(drug:Drugs){
     let index=this.cartDrugList.indexOf(drug)
    this.cartDrugList.splice(index,1)
  }
  getResult():number{
     let res=0;
     let finalSum=0;
    for(let drug of this.cartDrugList){
      res=drug.quantity*drug.price;
      finalSum+=res
    }
    return finalSum
  }
  quantityPlus(drug:Drugs){
     drug.quantity+=1;
  }
  quantityMinus(drug:Drugs){
  if(drug.quantity>0){
    drug.quantity-=1;
  }
  }
}

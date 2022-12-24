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
    this.cartDrugList.unshift(drug);
    localStorage.removeItem(`${drug.id}`);
  }
  // getResult(){
  //   for(let drugs of this.forCart){
  //     this.results=drugs.count*drugs.drug.price
  //   }
  // }

}
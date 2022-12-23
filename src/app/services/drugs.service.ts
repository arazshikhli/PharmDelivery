import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartDrug, Drugs } from '../model/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DrugService implements OnInit{
  drugs:Drugs[]=[];
  forCart:CartDrug[]=[];
  drugCounter!:number;
  randomDrugs:Drugs[]=[];
  added:string|null;
   cartDrugList:Drugs[]=[]
  constructor(private http:HttpClient,
    
    ) {
    this.http.get<Drugs[]>('assets/drugs.json').subscribe((response)=>{
      this.drugs=response;
      this.drugCounter=this.drugs.length;
      console.log(this.drugCounter);
    })
  
  }
  getDrugs(){
    return this.http.get<Drugs[]>('assets/drugs.json')
  }
  ngOnInit(){

  }
  FavoriteDrugs():Drugs[]{
    let firstIndex=Math.floor(Math.random()*26) ;
    let secondIndex=firstIndex+5;
    for(let i=firstIndex;i<secondIndex;i++){
      this.randomDrugs.push(this.drugs[i])
    }
    return this.randomDrugs
  }
  public getSum():number{
    let sum=0;
    for(let i=0;i<this.cartDrugList.length;i++){
      sum+=this.cartDrugList[i].quantity
    }
    return sum
  }
  public getResult():number{
    let a=0;
    let result=0;
 for(let d of this.forCart){
  result+=d.count*d.drug.price
 }
 return result
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
  plusCount(drug:CartDrug){
    drug.count+=1
  }
  minusCount(drug:CartDrug){
    if(drug.count>0){
      drug.count-=1;
    }
    if(drug.count===0){
      this.forCart.splice(this.forCart.indexOf(drug),1)
    }
  }
  deleteDrugFromCart(drug:CartDrug){
    this.forCart.splice(this.forCart.indexOf(drug),1)
  }
}
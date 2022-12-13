import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { CartDrug, Drugs } from '../model/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DrugService implements OnInit{
  drugs:Drugs[]=[];
  forCart:CartDrug[]=[];
  forCartSumm=0;
  drugCounter!:number;
  randomDrugs:Drugs[]=[];
  added!:string|null
  constructor(private http:HttpClient) {
    this.http.get<Drugs[]>('assets/drugs.json').subscribe((response)=>{
      this.drugs=response;
      this.drugCounter=this.drugs.length;
      console.log(this.drugCounter);
    })
  
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
    for(let i=0;i<this.forCart.length;i++){
      sum+=this.forCart[i].count
    }
    return sum
  }
  
  addDrug(drug:Drugs){
      this.forCart.push({id:drug.id,drug:drug,count:1})
    
  }
  removeDrug(drug:Drugs){
    let a=this.forCart.filter(p=>{
      p.drug.id===drug.id
    });
    console.log(a)
  }
}
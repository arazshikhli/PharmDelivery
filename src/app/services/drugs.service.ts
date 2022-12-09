import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Drugs } from '../model/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DrugService implements OnInit{
  drugs:Drugs[]=[]

  forCartSumm=0
  drugCounter!:number
  constructor(private http:HttpClient) {
    this.http.get<Drugs[]>('assets/drugs.json').subscribe((response)=>{
      this.drugs=response
      // this.drugCounter=this.drugs.length
      // this.drugs=response;
      // this.drugCounter=this.drugs.length
      // console.log(this.drugCounter)
    })
  
  }
  ngOnInit(){

  }
  // public getSum():number{
  //   let sum=0;
  //   for(let i=0;i<this.forCart.length;i++){
  //     sum+=this.forCart[i].count
  //   }
  //   return sum
  // }
  // isBuy():boolean{
  //   let isCheck:boolean=true
  //     for(let a of this.forCart){
  //       if(a.count>0){
  //        isCheck=true
  //       }
  //       else isCheck=false
  //     }
  //     return isCheck
  // }
}
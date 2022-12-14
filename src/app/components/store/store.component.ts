
import { Component, Input, OnInit } from '@angular/core';

import { DrugService } from 'src/app/services/drugs.service';
import { Drugs } from 'src/app/model/interfaces';
import { async, Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  searchValue='';
  page=1;
  itemsPerPage:number=12;
  added:string |null
  toggle=false
  drugs:Drugs[]
  drugSubScription:Subscription

  @Input()key:string
  constructor(public drugService:DrugService, ) {
  
     }

  ngOnInit(): void {
    this.drugSubScription=this.drugService.getDrugs().subscribe((data)=>{
      this.drugs=data;
    })

  }
  ngOnDestroy(){
    if (this.drugSubScription) this.drugSubScription.unsubscribe();
  }
  AddDrugs(drug:Drugs){
   this.drugService.addDrug(drug);
    console.log("add",this.added)
  }
  // RemoveDrug(drug:Drugs){
  //   this.drugService.deleteDrug(drug)
  //   console.log("remove",this.added)
  // }

  }



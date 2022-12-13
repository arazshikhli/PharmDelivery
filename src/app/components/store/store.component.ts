
import { Component, Input, OnInit } from '@angular/core';

import { DrugService } from 'src/app/services/drugs.service';
import { Drugs } from 'src/app/model/interfaces';
import { async, Observable } from 'rxjs';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  searchValue='';
  page=1;
  itemsPerPage:number=12;
  added:string |null;
  toggle=true



  constructor(public drugService:DrugService, ) {
     }


  ngOnInit(): void {
   
  }
  AddDrugs(drug:Drugs){
   this.drugService.addDrug(drug);
   
  }
  
  RemoveDrugs(drug:Drugs){
    this.drugService.removeDrug(drug)
  }
  }



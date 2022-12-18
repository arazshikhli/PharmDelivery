
import { Component, Input, OnInit } from '@angular/core';

import { DrugService } from 'src/app/services/drugs.service';
import { Drugs } from 'src/app/model/interfaces';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import {FormBuilder} from '@angular/forms';
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
  countries:string[]
  checker=false;
  russia=false;
  constructor(public drugService:DrugService,
    private _formBuilder: FormBuilder
    ) {
  
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
   this.added=localStorage.getItem(drug.id.toString())
   console.log(this.added)
  }
 
  }



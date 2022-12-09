import { Component, OnInit } from '@angular/core';
import { DrugService } from 'src/app/services/drugs.service';
import {MatCardModule} from '@angular/material/card';



@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  page=1;
  itemsPerPage:number=10;
  constructor(public drugService:DrugService) { }


  ngOnInit(): void {
  }
  

}

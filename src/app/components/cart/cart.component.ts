import { Component, OnInit } from '@angular/core';
import { DrugService } from 'src/app/services/drugs.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public drugService:DrugService) { }

  ngOnInit(): void {
    
  }

}

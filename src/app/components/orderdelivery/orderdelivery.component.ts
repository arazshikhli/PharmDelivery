import { Component, OnInit } from '@angular/core';
import { DrugService } from 'src/app/services/drugs.service';

@Component({
  selector: 'app-orderdelivery',
  templateUrl: './orderdelivery.component.html',
  styleUrls: ['./orderdelivery.component.scss']
})
export class OrderdeliveryComponent implements OnInit {

  constructor(private drugService:DrugService) { }

  ngOnInit(): void {
  }

}

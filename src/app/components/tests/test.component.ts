import { Component } from '@angular/core';
import { TestDrug } from 'src/app/model/interfaces';
import { DrugService } from 'src/app/services/drugs.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  testDrug:TestDrug[]
constructor(public drugService:DrugService ){

}
}

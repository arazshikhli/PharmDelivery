import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdvertDrug } from './adverts.drugs.interface';

@Injectable({
  providedIn: 'root'
})
export class AdvertDrugService {

  advertDrugs:AdvertDrug[]
  constructor(private httpClient:HttpClient) { 
    this.httpClient.get<AdvertDrug[]>('./assets/advert.drugs.json').subscribe(response=>{
      this.advertDrugs=response;
    })
  }
}

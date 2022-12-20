import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AddDrugs } from "./drugs.actions";
import { DrugsState } from "./drugs.reducer";
@Injectable()
export class DrugsStoreService{
    constructor(
        private store:Store<DrugsState>
    ){

    }
  public AddDrugs(){
    this.store.dispatch(AddDrugs())
  }  
}
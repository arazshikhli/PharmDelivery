import { state } from "@angular/animations";
import { createReducer,on } from "@ngrx/store";
import { AddDrugs, removeDrugs } from "./drugs.actions";
import { Drugs } from "./model/interfaces";
export const DRUGS_REDUCER_NODE='todo'

export const drugsReducer=(state=0,action:any)=>{
return state
}
export interface DrugsState{
    all:Drugs[],
    isAdded:boolean,
    isRemoved:boolean;
}
export const initialState:DrugsState={
all:[],
isAdded:false,
isRemoved:false
}
export const DrugsReducer=createReducer(
initialState,on(AddDrugs,(state:DrugsState)=>{
return  {
    ...state,
    isAdded:true,
}
}),on(removeDrugs,(state:DrugsState)=>{
    return {
        ...state,
        isRemoved:true
    }
})
)
import { createReducer,on } from "@ngrx/store";
import { AddDrugs } from "./drugs.actions";
import { Drugs } from "./model/interfaces";
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
})
)
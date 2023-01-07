import { createReducer,on } from "@ngrx/store";

import { Drugs } from "./model/interfaces";
import { AddDrugs, } from "./drugs.actions";



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
import { state } from "@angular/animations";
import { createReducer,on } from "@ngrx/store";
import { AddDrugs, DrugActions, drugActionsType, removeDrugs } from "./drugs.actions";
import { Drugs } from "./model/interfaces";
export const DRUGS_REDUCER_NODE='drug'

export interface DrugState{
idIncrement:number
drugList:Drugs[],
quantity:number
}
const initialDrugState:DrugState={
idIncrement:1,
drugList:[],
quantity:0
}
export const drugsReducer=(state=initialDrugState,action:DrugActions)=>{
switch (action.type){
    case drugActionsType.create:
        return {
            ...state,
            idIncrement:state.idIncrement+1,
            quantity:state.quantity=1,
            drugList:[
                ...state.drugList,
                {
                    id:state.idIncrement,
                    drug:action.payload.drug,
                },
               
            ]

        };
        default:
            return state
}
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
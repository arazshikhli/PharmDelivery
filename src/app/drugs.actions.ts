
import { Action, createAction } from "@ngrx/store";
import { Drugs } from "./model/interfaces";

export const AddDrugs=createAction('[Drugs], Add Drugs')
export const removeDrugs=createAction('[Drugs], RemoveDrug');

export enum drugActionsType{
    create='[Drug] create drug iten'
}
export class DrugCreateAction implements Action{
readonly type=drugActionsType.create;
constructor(public payload:{drug:Drugs}){
}

}
export type DrugActions=DrugCreateAction;
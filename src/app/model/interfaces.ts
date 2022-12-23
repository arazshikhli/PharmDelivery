export interface Drugs{
    id:number
    name:string
    price:number
    imgURL:string
    byPrescription:boolean
    country:String,
    quantity:number

}
export interface ProfileUser {
    uid: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    displayName?: string;
    phone?: string;
    address?: string;
    photoURL?: string;
  }
  
export interface User{
    uid: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    displayName?: string;
    phone?: string;
    address?: string;
    photoURL?: string;
}
export interface CartDrug{
    id:number
    drug:Drugs
    count:number
}
export interface Tile {
    color: string;
    cols: number;
    rows: number;
    text: string;
  }
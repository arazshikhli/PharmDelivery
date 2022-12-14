import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderdeliveryComponent } from '../components/orderdelivery/orderdelivery.component'; 
import { CartComponent } from '../components/cart/cart.component';
const routes: Routes = [
  {path:'cart',component:CartComponent},
  {
    path:'order',component:OrderdeliveryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }

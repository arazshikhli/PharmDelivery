import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { canActivate,redirectUnauthorizedTo,redirectLoggedInTo } from '@angular/fire/auth-guard';
import { ProfileComponent } from './auth/profile/profile.component';
import { StoreComponent } from './components/store/store.component';
import { ResetComponent } from './auth/reset/reset.component';
import { AdvertDrugsComponent } from './components/home/advert-drugs/advert-drugs.component';
import { TestComponent } from './components/tests/test.component';
import {PartnersComponent} from "./components/partners/partners.component";
import {AdminLayoutComponent} from "./admin/admin-layout/admin-layout.component";
const redirectToLogin=()=>redirectUnauthorizedTo(['login']);
const redirectToHome=()=>redirectLoggedInTo(['/'])
const routes: Routes = [
  {
    path:'',pathMatch:'full',component:HomeComponent
  },
  {
    path:"signup",component:SignupComponent,

  },
  {
    path:"login",component:LoginComponent,


  },
  {path:'reset',component:ResetComponent

    },
  {
    path:"cart",component:CartComponent,

  },

  {
    path:"profile",component:ProfileComponent,
    ...canActivate(redirectToLogin)
  },
 {
  path:'store',component:StoreComponent
 },
 {
  path:'advert-drug',component:AdvertDrugsComponent
 },
 {
  path:'test',component:TestComponent
 },
  {
    path:'partners',component:PartnersComponent
  },
  {
    path:'admin',component:AdminLayoutComponent
    // path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

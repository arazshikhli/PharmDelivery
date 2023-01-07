import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminLoginComponent
  ],
  imports: [CommonModule,
    // RouterModule.forChild([
    //   {
    //     path: '', component: AdminLayoutComponent, children: [
    //       // {path: '', redirectTo: '/admin/login', pathMatch: "full"},
    //       {
    //         path: 'login', component: AdminLoginComponent
    //       }]
    //   }
    // ]),
    ReactiveFormsModule, MatFormFieldModule, MatButtonModule],
  exports:[RouterModule],

})
export class AdminModule{

}

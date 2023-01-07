import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {AuthentificationService} from "../../services/authentification.service";
import {Router} from "@angular/router";
import {HotToastService} from "@ngneat/hot-toast";
import {UsersService} from "../../services/users.service";


export function createEmailValidators():ValidatorFn{
  return  (control:AbstractControl):ValidationErrors|null=>{
    const value=control.value;

    if(!value){
      return null
    }
    const hasAdmin=value.value.includes('admin@mail.ru');

    emailInclude:{
      hasAdmin:true
    }

    return !hasAdmin?{emailInclude:true}:null
  }
}
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  constructor(private  authService:AuthentificationService,
              private router:Router,
              private toastServicd:HotToastService,
              public user$:UsersService
              ) {
  }
  adminLoginForm=new FormGroup(
    {
      email:new FormControl('',[Validators.email]),
      password:new FormControl('',[Validators.required])
    }
  )

  get email(){
    return this.adminLoginForm.get('email')
  }
  get password(){
    return this.adminLoginForm.get('password')
  }
Submit(){
  const { email, password } = this.adminLoginForm.value;

  if (!this.adminLoginForm.valid || !email || !password) {
    return;
  }

  this.authService
    .login(email, password)
    .pipe(
      this.toastServicd.observe({
        success:"Вход выполнен успешно",
        error: ({ message }) => `Произошла ошибка: ${message} `,
        loading:"Загрузка..."
      },)
    )
    .subscribe(() => {
      this.router.navigate(['/admin']);
    });
}
}

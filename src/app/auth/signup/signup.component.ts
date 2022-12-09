import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthentificationService } from 'src/app/services/authentification.service';
import {HotToastService} from '@ngneat/hot-toast'
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

export function passwordsMatch():ValidatorFn{
return (control:AbstractControl):ValidationErrors|null=>{
 const password=control.get('password')?.value;
 const confirmPassword=control.get('confirmPassword')?.value;

 if(password&&confirmPassword&&password!==confirmPassword){
  return {
    passwordsDontMatch:true
  }
 }
 return null
}
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    confirmPassword:new FormControl('',[Validators.required,Validators.minLength(6)])
  },{validators:passwordsMatch()})
  constructor(private auth:AuthentificationService,
    private toast:HotToastService, private router:Router,
    private userService:UsersService
    ) { }

  ngOnInit(): void {
  }
  get name(){
    return this.signUpForm.get('name');
  }
  get email(){
    return this.signUpForm.get('email');
  }
  get password(){
    return this.signUpForm.get('password');
  }
  get confirmPassword(){
    return this.signUpForm.get('confirmPassword');
  }

  submit() {
    const { name, email, password } = this.signUpForm.value;

    if (!this.signUpForm.valid || !name || !password || !email) {
      return;
    }

    this.auth
      .signUp(email, password)
      .pipe(
        switchMap(({ user: { uid } }) =>
          this.userService.addUser({ uid, email, displayName: name })
        ),
        this.toast.observe({
          success: 'Поздравляем с регистрацией',
          loading: 'Регистрация...',
          error: ({ message }) => `${message}`,
        })
      )
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
  // submit(){
  //   const{name,email,password}=this.signUpForm.value;
  //   if(!this.signUpForm.valid){
  //     return;
  //   }
   
  //   this.auth
  //   .signUp(email!,password!)
  //   .pipe(
  //     this.toast.observe({
  //       success:"Поздравляем с регистрацией",
  //       loading:'Регистрация...',
  //       error: ({message})=>`${message}`
  //     })
  //   ).subscribe(()=>{
  //     this.router.navigate(['/'])
  //   })
  // }
}

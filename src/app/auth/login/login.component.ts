import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import {HotToastService} from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })
  constructor(private router:Router,private auth:AuthentificationService,
   private toast:HotToastService
    ) { }

  ngOnInit(): void {
  }

  goToSign(){
    this.router.navigate(['/signup'])
  }
  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }

  Submit() {
    const { email, password } = this.loginForm.value;

    if (!this.loginForm.valid || !email || !password) {
      return;
    }

    this.auth
      .login(email, password)
      .pipe(
        this.toast.observe({
          success: 'Вход выполнен успешно',
          loading: 'Загрузка...',
          error: ({ message }) => `Произошла ошибка: ${message} `,
        })
      )
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
  goToForgot(){
    this.router.navigate(['/reset'])
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { ImageUploadService } from 'src/app/services/image-upload.service'; 
import {HotToastService} from '@ngneat/hot-toast';
import {concatMap, switchMap} from 'rxjs';
import { ProfileUser } from 'src/app/model/interfaces';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user$=this.auth.currentUser$
  profileForm=new FormGroup({
    uid: new FormControl(''),
    email:  new FormControl(''),
    firstName:  new FormControl(''),
    lastName:  new FormControl(''),
    displayName:  new FormControl(''),
    phone:  new FormControl(''),
    address:  new FormControl(''),
    photoURL:  new FormControl(''),
  })
  constructor(private auth:AuthentificationService,
    private imageService:ImageUploadService,
    private toast:HotToastService,
    private usersService:UsersService
    ) { }

  ngOnInit(): void {
   
  }

  uploadImage(event:any,user:User){
   this.imageService.uploadImage(event.target.files[0],`images/profile/${user.uid}`).pipe(
    this.toast.observe({
      success:'Загрузка выполнена успешно.',
      loading:'Загрузка...',
      error:'Произошла ошибка.'
    }
    ),concatMap((photoURL)=>this.auth.updateProfileData({photoURL}))
   ).subscribe();
  }
  saveProfile(){

  }
}
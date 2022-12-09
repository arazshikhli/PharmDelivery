import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { ImageUploadService } from 'src/app/services/image-upload.service'; 
import {HotToastService} from '@ngneat/hot-toast';
import {concatMap, switchMap} from 'rxjs';
import { ProfileUser } from 'src/app/model/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user$=this.auth.currentUser$
  constructor(private auth:AuthentificationService,
    private imageService:ImageUploadService,
    private toast:HotToastService
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
}
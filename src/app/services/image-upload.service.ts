import { Injectable } from '@angular/core';
import { Storage,ref, getDownloadURL,uploadBytes } from '@angular/fire/storage';
import {from,switchMap} from "rxjs";
import {} from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private storage:Storage) { }
  uploadImage(image:File,path:string):Observable<string>{
    const storageRef=ref(this.storage,path);
    const uploadTask=from(uploadBytes(storageRef,image))
    return uploadTask.pipe(
      switchMap((result)=>getDownloadURL(result.ref))
    )
  }
}

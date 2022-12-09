import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, updateProfile,UserInfo } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { from, Observable,concatMap,of } from 'rxjs';
import { UserCredential } from '@firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  currentUser$=authState(this.auth);
  constructor(private auth:Auth){ }
  signUp(email: string, password: string): Observable<UserCredential> {
   return from(createUserWithEmailAndPassword(this.auth,email,password))
  }

  login(email:string,password:string):Observable<any>{
  return  from(signInWithEmailAndPassword(this.auth,email,password))
  }
  
  updateProfileData(profileData:Partial<UserInfo>):Observable<any>{
    const user=this.auth.currentUser;
    return of(user).pipe(
      concatMap(user=>{
        if(!user)throw new Error('Нет авторизации');
        return updateProfile(user,profileData)
      })
    )

  }
  logout(){
    return from(this.auth.signOut())
  }
  
}


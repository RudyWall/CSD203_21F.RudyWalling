import { Injectable } from '@angular/core';
import * as firebase from 'firebase/auth';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any = {
    email: ""
  }
  loggedIn: boolean = false;
  isLoggedIn(){
    return this.loggedIn;
  }
  signInWithEmail(){
    this.loggedIn= true;
    alert("Sign in pressed");
  }
    constructor(private database: DatabaseService) { 

    }
  getUserData() {
    return this.userData;
  }
  signInWithGooglePopUp(){
    let provider = new firebase.GoogleAuthProvider();

  firebase.signInWithPopup(firebase.getAuth(), provider).then((result) => {
    //This gives you a Google Access token. You can use it to access Google API.
    //result.credential.accessToken;
    this.database.WriteLoginToDatabase(result.user.email);
    this.loggedIn = true;
    this.userData.email = result.user.email;
  }).catch((error) =>{
    //Handle Errors here.
    //error.code;
    //error.message;
    //error.email;
    console.log(error.message);
  });
}}


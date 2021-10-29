import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }
  initializeApp(){
    this.platform.ready().then(() => {
      var firebaseConfig = {
        apiKey: "AIzaSyBXGCfG4NtRHHBOYCBWG9Yec9N__WrkUYA",
        authDomain: "csd203-905fb.firebaseapp.com",
        projectId: "csd203-905fb",
        storageBucket: "csd203-905fb.appspot.com",
        messagingSenderId: "1014038019204",
        appId: "1:1014038019204:web:84c35d549e5d7a5bb3d6d1",
        measurementId: "G-KGEG77WL87"
      }
      firebase.initializeApp(firebaseConfig);
    });
  }
}

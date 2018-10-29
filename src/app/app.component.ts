import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedMenu = 'recipe';

  onMenuChange(selectedMenu: string) {
    this.selectedMenu = selectedMenu;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDtQQdNpoMhxtn6YyPGX2SFKmQVmc3UG0M',
      authDomain: 'ng-shopping-list-7d201.firebaseapp.com'
    });
  }
}

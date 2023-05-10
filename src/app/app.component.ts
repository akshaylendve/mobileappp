import { Component, ViewEncapsulation , OnInit } from '@angular/core';
import { UserDataService } from './api/user-data.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  appPages = [

    {
      title: 'Clients',
      url: '/app/clients',
      icon: 'people'
    }
  ];
  loggedIn = false;
  dark = true;
  constructor(private userdataservice : UserDataService , private storage: Storage) {
    
  }
  async ngOnInit(){
    let isLogged=  this.userdataservice.isLoggedIn();
    if(await isLogged){
    console.log("login");
    
    }
    // await this.storage;
    this.storage.set('ion_did_tutorial', false);
  }
}

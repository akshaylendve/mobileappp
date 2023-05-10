import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  favorites: string[] = [];
  constructor( public storage: Storage) { }



  hasFavorite(sessionName: string): boolean {
    return (this.favorites.indexOf(sessionName) > -1);
  }

  addFavorite(sessionName: string): void {
    this.favorites.push(sessionName);
  }

  removeFavorite(sessionName: string): void {
    const index = this.favorites.indexOf(sessionName);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
  }

  setAccountInfo(accountObj: any): Promise<any> {
    return this.storage.set('account', accountObj).then(() => {
      return window.dispatchEvent(new CustomEvent('user:login'));
    });
  }


  getAccountInfo(): Promise<any> {
    return this.storage.get('account').then((account) => {
      return account;
    });
  }
  signup(accountObj: any): Promise<any> {
    return this.storage.set('account', accountObj).then(() => {
      return window.dispatchEvent(new CustomEvent('user:signup'));
    });
  }

  logout(): Promise<any> {
    return this.storage.remove('account').then(() => {
    }).then(() => {
      window.dispatchEvent(new CustomEvent('user:logout'));
    });
  }

  isLoggedIn(): Promise<boolean> {
    return this.storage.get('account').then((value) => {
      return value?true:false;
    });
  }

}

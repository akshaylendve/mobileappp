import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }
  public login(loginObj:any){
    return this.httpClient.post(environment.apiUrl+'login',loginObj);
  }
  public signup(projectId:string){
    return this.httpClient.get('../../assets/account.json');
  }
}

import { Injectable } from '@angular/core';
import { UserAccount } from '../interfaces/user-account';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  public getProjects(account:UserAccount){
    const accesToken = account.Token;
    const httpHeadersOptions = { headers: new HttpHeaders({ Authorization: accesToken }) };
    return this.httpClient.get(environment.apiUrl+'Project',httpHeadersOptions);
  }
}

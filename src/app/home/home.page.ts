import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserOptions } from '../interfaces/user-options';
import { AccountService } from '../api/account.service';
import { LoaderServiceService } from '../api/loader-service.service';
import { UserDataService } from '../api/user-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loginObj: UserOptions = { userName: '', password: '',client:'' };
submitted = false;
 
  
  constructor(private accountservice: AccountService ,private router: Router, private loaderservice: LoaderServiceService, private usardata : UserDataService) {}
  // OnLogin(b1:any,b2:any,b3:any  , ){
  //   if (this.loginInfo.userName=="" && this.loginInfo.client=="" && this.loginInfo.password=="") {
  //     console.log( "client "+ "=" + b1.value);
  //     console.log("username "+ "="+ b2.value);
  //     console.log("password "+ "="+ b3.value);
      

  OnLogin(form: NgForm){
    this.submitted = true;
if (this.loginObj.userName=="" && this.loginObj.client=="" && this.loginObj.password=="") {
  console.log("data" );
  
} else {
  console.log( "login")
    
  this.loaderservice.showLoader();
  this.loginObj.password= btoa(this.loginObj.password);
  this.accountservice.login(this.loginObj).subscribe( account=>{
    if (account) {
    this.usardata.setAccountInfo(account);
 
    }
    else{
      
    }
    
  
});
}

 }

}

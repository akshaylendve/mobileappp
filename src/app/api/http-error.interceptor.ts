import {  HttpEvent,HttpInterceptor,HttpHandler, HttpRequest, HttpResponse,HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
// import { LoaderService } from './loaderService';
import { LoaderServiceService } from '././loader-service.service';
// import { UserData } from './user-data';
import { UserDataService } from '././user-data.service';

//import { ErrorLoggService } from './error-log.service';
//import {Injector} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor( private loaderService : LoaderServiceService ,    private router: Router,    private userData: UserDataService) {
 }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
     //  retry(1),
      catchError((error: HttpErrorResponse) => {
      // debugger;
    if(error.status===401){
      this.userData.logout().then(() => {
        this.router.navigateByUrl('/login');
         });
    }
      this.loaderService.dismissLoader();
      //  this.errorLoggService.logError(error);
        return throwError(error);
      })
    );
  }
}

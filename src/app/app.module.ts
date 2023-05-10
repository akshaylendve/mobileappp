import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpErrorInterceptor } from './api/http-error.interceptor';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
// import { IonicStorageModule } from '@ionic/storage';
import { RouterModule } from '@angular/router';
import {  Routes } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage-angular';
// import {JitCompilerFactory} from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
     IonicModule.forRoot(),
     IonicStorageModule.forRoot(),
    // JitCompilerFactory,
     ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
      AppRoutingModule],
  // providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  providers: [InAppBrowser,
    {provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true}],

  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

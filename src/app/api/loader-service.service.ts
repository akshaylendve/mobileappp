import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class LoaderServiceService {
  private isLoading: any;
  constructor(public loadingController: LoadingController) {
    this.isLoading=false;
   }




   async showLoader() {
    let dismissElement= await this.loadingController.getTop();
    if(!dismissElement){
    this.isLoading=true;
    this.loadingController.create({
      message: 'Loading...'
    }).then((response) => {
      response.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          response.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }
  
  }


  
  // Dismiss loader
  async dismissLoader() {
    this.isLoading=false;
  
    this.loadingController.dismiss().then((response) => {
      
      console.log('Loader closed!', response);
    }).catch((err) => {
      console.log('Error occured : ', err);
    });
    let dismissElement= await this.loadingController.getTop();
    if(dismissElement){
     await dismissElement.dismiss();
    }
  
  }


  
  // Auto hide show loader
  autoLoader() {
    this.loadingController.create({
      message: 'Loader hides after 4 seconds',
      duration: 4000
    }).then((response) => {
      response.present();
      response.onDidDismiss().then((response) => {
        console.log('Loader dismissed', response);
      });
    });
  }   
  // Custom style + hide on tap loader
  customLoader() {
    this.loadingController.create({
      message: 'Loader with custom style',
      duration: 4000,
      cssClass:'loader-css-class',
      backdropDismiss:true
    }).then((res) => {
      res.present();
    });
  }   
}


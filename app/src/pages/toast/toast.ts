import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';

/**
 * Generated class for the ToastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html'
})
export class ToastPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToastPage');
  }
  showToast():void{
    console.log("Toast...")
    let toast=this.toastCtrl.create({
      message:'a basic toast....',
      duration:1000
    });
    toast.present();
  }


}

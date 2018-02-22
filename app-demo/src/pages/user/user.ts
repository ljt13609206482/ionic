import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage'

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {
  user={};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage:Storage
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
    this.storage.get('user').then(value=>{
      this.user=value;
      console.error(this.user);
    })
  }
  signOut():void{
    //注销
    this.storage.clear();
    this.navCtrl.push('HomePage')
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html'
})
export class IndexPage {
  items=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for(let i=0;i<30;i++){
      this.items.push(i)
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }

}

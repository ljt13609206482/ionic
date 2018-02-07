import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GesturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gesture',
  templateUrl: 'gesture.html'
})
export class GesturePage {

  tapNum:number=0;
  pressNum:number=0;
  panNum:number=0;
  swipeNum:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GesturePage');
  }
  tapEvent():void{
    //...:void没有返回值
    console.error("tapped...")
    this.tapNum++;
  }
  pressEvent():void{
      this.pressNum++
  }
  panEvent():void{
    this.panNum++;
  }
  swipeEvent():void{
    this.swipeNum++;
  }

}

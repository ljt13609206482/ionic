import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {


  }
  //跳转函数，根据传入的不同参数（页面地址），跳转到不同的页面
  JumpPage(navUrl:string):void{
    this.navCtrl.push(navUrl);
  }

}

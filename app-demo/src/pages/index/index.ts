import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http'
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
  products=[];
  //在构造器中初始化items数组
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpClient:HttpClient
  ) {

  }
  //在ionic视图加载完成后，会自动调用
  ionViewDidLoad() {
    console.error('IndexPage视图加载完成');
    let url='/product/1';
    this.httpClient.get(url,{})
    .subscribe(
      (res)=>{
        console.error(res)
      },
      (err)=>{
        console.error(err)
      })
  }
  doInfinite(event):void{

  }

}

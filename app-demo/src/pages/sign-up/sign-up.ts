import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpPage {
  //定义对象保存用户基本信息
  user={
    email:'',
    username:'',
    password:'',
    gender:'male',
    age:'',
    city:'BeiJing'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }
  signUp():void{
    console.error(this.user);
    //发送HTTP请求
    let url='/signUp';
    this.httpClient.post(url,{email:this.user.email,password:this.user.password})
      .subscribe((res)=>{
        //请求成功的回调函数
        console.error(res)
      }),
      (err)=>{
        //请求失败的回调函数
        console.error(err)
      }
  }

}

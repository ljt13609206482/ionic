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
  providers:[HttpClient],
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
    //let url='http://127.0.0.1:3000/signUp';
    //this.httpClient.post(url,{email:this.user.email,password:this.user.password})
    //  .subscribe((res)=>{
    //    console.errer(res)
    //  }),
    //  (err)=>{
    //    console.error(err)
    //  }
  }

}

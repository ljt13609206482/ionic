import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ToastController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpClient: HttpClient,
              public alertCtrl:AlertController,
              public toastCtrl:ToastController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }
  signUp():void{
    console.error(this.user);
    //发送HTTP请求
    let url='/signUp';
    this.httpClient.post(url,{user:this.user})
      .subscribe((res)=>{
        //请求成功的回调函数
        console.error(res);
        //如果返回值为由向已经存在，在创建一个警告
        if(res['status']==='exist'){
           this.alertCtrl.create({
             title:"Error",
             subTitle:"Email is already exist",
             buttons:['OK']
           }).present()
        }else if(res['status']==='err'){
           this.toastCtrl.create({
              message:"服务器错误",
              duration:1000,
             position:"middle"
           }).present()
        }else{
          //status:ok
          // 页面跳转至HomePage
          this.navCtrl.push('HomePage')
        }
      }),
      (err)=>{
        //请求失败的回调函数
        console.error(err)
      }
  }

}

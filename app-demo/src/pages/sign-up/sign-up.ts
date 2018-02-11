import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, ToastController} from 'ionic-angular';
import {HttpClient} from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  user = {
    email: '',
    username: '',
    password: '',
    gender: 'male',
    age: '',
    city: 'Shanghai'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient, public alertCtrl: AlertController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  signUp(): void {
    this.httpClient.post('/signUp', {user:this.user})
      .subscribe(
        res => {
          let status = res['status'];
          if (status === 'exist') {
            // 注册之前，查询邮箱是存在的，不能注册
            this.alertCtrl.create({
              title: 'Error',
              subTitle: 'Email is already exist.',
              buttons:['OK']
            }).present();
          } else if (status === 'err') {
            // Insert 时发生了其它错误
            this.toastCtrl.create({
              message: '服务器错误',
              duration: 1000,
              position: 'middle'
            }).present();
          } else {
            // status 是 ok
            // 页面跳转 HomePage
            this.navCtrl.push('HomePage');
          }
        },
        err => {
            console.error(err);
            // todo
        }
      );
  }
}

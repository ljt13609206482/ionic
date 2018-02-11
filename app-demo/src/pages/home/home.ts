import {Component} from '@angular/core';
import {IonicPage, NavController,AlertController} from 'ionic-angular';
import {HttpClient} from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //定义user对象，保存用户输入的邮箱以及密码
  user={
    email:'',
    password:''
  };
  constructor(public navCtrl: NavController,
              public httpClient: HttpClient,
              public alertCtrl:AlertController
  ) {
  }

  signUpPage():void {
    this.navCtrl.push('SignUpPage');
  }
  signIn():void{
    //发送http请求
    console.error(this.user)
    this.httpClient.post('/signIn', {user:this.user})
      .subscribe((res)=>{
        console.error(res)
        if(res['status']==='ok'){
          this.navCtrl.push('IndexPage')
          console.error("登录成功!")
        }else{
          this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Email or password is error.',
            buttons:['OK']
          })
        }
      },
      (err)=>{
        console.error(err)
      }
    )
  }
}

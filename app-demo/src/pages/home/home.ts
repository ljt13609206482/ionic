import {Component} from '@angular/core';
import {IonicPage, NavController,AlertController} from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage'

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
  constructor(private navCtrl: NavController,
              private httpClient: HttpClient,
              private alertCtrl:AlertController,
              private storage:Storage
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
        //console.error(res)
        if(res['status']==='ok'){
          //保存用户邮箱
          this.storage.set('email',this.user.email);
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

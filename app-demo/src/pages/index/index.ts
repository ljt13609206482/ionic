import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage'

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

  products:any=[];
  page: number = 1;
  hasMoreData: boolean = true;
  user:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpClient: HttpClient,
              public storage:Storage
  ) {

  }

  ionViewDidLoad() {
    let url = `/products/${this.page}`;
    this.httpClient.get(url)
      .subscribe(
        res => {
        this.products = res;
      },
        err => {
        console.error(err);
      }
    );
    this.storage.get('user').then(value=>{
      this.user=value;
      console.error(this.user)
    })
  }

  loadMoreData(infiniteScrollEvent): void {
    let url = `/products/${++this.page}`;
    this.httpClient.get(url)
      .subscribe(
        res => {
        let length = res['length'];
        if (length < 20 || length === 0) {
          this.hasMoreData = false;
        } else {
          // 在原有 JSON 数组的基础上，添加新一页的数据
          this.products = this.products.concat(res);
        }
        infiniteScrollEvent.complete();
      },
        err => {
        console.error(err);
      }
    );
  }

  productPage(productId): void {
    this.navCtrl.push('ProductPage', {productId: productId});
  }

// WebStorm live template
}

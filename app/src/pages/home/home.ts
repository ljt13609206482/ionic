import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ButtonPage} from '../button/button';
import {ListPage} from '../list/list'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  buttonPage;
  listPage;

  constructor(public navCtrl: NavController) {
    this.buttonPage=ButtonPage;
    this.listPage=ListPage;

  }

}

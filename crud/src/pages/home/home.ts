import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private model = {};

  constructor(public navCtrl: NavController) {

  }

  submitForm() {
    alert(JSON.stringify(this.model));
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App } from 'ionic-angular';
import { Q9Page } from '../q9/q9';
import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';
import { GalleryPage } from '../gallery/gallery';

/**
 * Generated class for the Q8Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-q8',
  templateUrl: 'q8.html',
})
export class Q8Page {
  page = Q9Page;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Q8Page');
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Congratulations!',
      subTitle: 'Right Answer',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert1() {
    const alert = this.alertCtrl.create({
      title: 'Try Again!',
     subTitle: 'Wrong Answer',
      buttons: ['OK']
    });
    alert.present();
  }
  hom() {
    this.navCtrl.setRoot(HomePage);
}
qui() {
  const root = this.app.getRootNav();
  root.popToRoot();
}
gal() {
  this.navCtrl.setRoot(GalleryPage);
}
con() {
  this.navCtrl.setRoot(ContactPage);
}
}

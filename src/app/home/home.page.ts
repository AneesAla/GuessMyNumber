import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(private navCtrl: NavController) {}

  startGame() {
    // Navigate to the guess-mynumber page when the button is clicked
    this.navCtrl.navigateForward('/guess-mynumber');
  }
}


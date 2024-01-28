import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-guess-mynumber',
  templateUrl: './guess-mynumber.page.html',
  styleUrls: ['./guess-mynumber.page.scss'],
})
export class GuessMynumberPage implements OnInit {
  randomNumber: number = 0;
  playerGuess: number | undefined; 
  attempts: number = 0;
  feedbackMessage: string = '';

  ngOnInit() {
    this.initializeGame();
  }


  initializeGame() {
    this.randomNumber = this.generateRandomNumber(); 
    this.playerGuess = 0; 
    this.attempts = 0; 
    this.feedbackMessage = 'Welcome! Please enter in a guess to get started.'; 
  }


  generateRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  processGuess() {
    if (this.playerGuess === null || isNaN(this.playerGuess!)) {
      this.feedbackMessage = 'Please enter a valid number.';
      return;
    }

    this.attempts++;

    if (this.playerGuess === this.randomNumber) {
      this.feedbackMessage = 'Congratulations! You guessed the correct number.';
    } else if (this.attempts >= 10) {
      this.feedbackMessage = `Sorry, you've reached the maximum number of attempts. The correct number was ${this.randomNumber}.`;

    } else if (this.playerGuess !== undefined && this.playerGuess < this.randomNumber) {
      this.feedbackMessage = 'Too low! Try a higher number.';
    } else {
      this.feedbackMessage = 'Too high! Try a lower number.';
    }
  }

  constructor(private navCtrl: NavController) { }
  startGame() {
    this.navCtrl.navigateForward('/game');
  }

  goBackToHome() {
    this.navCtrl.navigateBack('/home');
  }

}

import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';
import firstScene from 'src/app/scene/firstScene';
@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.page.html',
  styleUrls: ['./game-screen.page.scss'],
})
export class GameScreenPage implements OnInit {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;

  constructor() { 
  }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.initializePhaser();
  }

  initializePhaser(){
    this.config = {
      type: Phaser.AUTO,
      width: 200,
      height: 200,
      parent: 'game',
      scene: [firstScene],
      scale: {
        mode: Phaser.Scale.ENVELOP
      }
    }
    this.phaserGame = new Phaser.Game(this.config)
  }

}

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

  constructor() {}

  ngOnInit() {
  }
 async ionViewWillEnter(){
   try{
      const element = document.getElementById('game');
      await element.requestFullscreen();
      this.initializePhaser();
      document.addEventListener('fullscreenchange', (event) => {
        console.log('entrou');
        if (!document.fullscreenElement) {
          alert('saiu');
        }
      });
    }
    catch(error){
      alert(error);
    }

  }

  initializePhaser(){
    this.config = {
      type: Phaser.AUTO,
      parent: 'game',
      physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
      },
      scene: [firstScene],
      scale: {
        width:1366,
        height:768,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        mode: Phaser.Scale.FIT
      }
    };
    this.phaserGame = new Phaser.Game(this.config);
  }

}

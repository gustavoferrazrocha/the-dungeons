import { Component, OnInit } from '@angular/core';
import {ModalController, NavController} from "@ionic/angular";
import { ConfigOptionsPage } from '../config-options/config-options.page';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.page.html',
  styleUrls: ['./start-screen.page.scss'],
})
export class StartScreenPage implements OnInit {

  constructor(
    public modalController: ModalController,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    localStorage.setItem("toggleChecked", "false")
  }
  openGame(){
    this.navCtrl.navigateForward("game-screen")
  }
  async openOptions() {
    const modal = await this.modalController.create({
      component: ConfigOptionsPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}

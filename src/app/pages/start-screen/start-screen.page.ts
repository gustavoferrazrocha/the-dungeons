import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import { ConfigOptionsPage } from '../config-options/config-options.page';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.page.html',
  styleUrls: ['./start-screen.page.scss'],
})
export class StartScreenPage implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
    localStorage.setItem("toggleChecked", "false")
  }
  async openOptions() {
    const modal = await this.modalController.create({
      component: ConfigOptionsPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}

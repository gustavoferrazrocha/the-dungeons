import { Component, OnInit, Input } from '@angular/core';
import { ModalController} from "@ionic/angular";
import {AudioService} from "../../services/audio/audio.service"

@Component({
  selector: 'app-config-options',
  templateUrl: './config-options.page.html',
  styleUrls: ['./config-options.page.scss'],
})
export class ConfigOptionsPage implements OnInit {
  @Input() title: string;
  public toggleChecked: boolean;
  constructor(
    public modalController: ModalController,
    public audioService: AudioService,
    ) { 
    this.toggleChecked = localStorage.getItem("toggleChecked") == "true"?true:false

  }

  ngOnInit() {
  }
  changeVolume(event){
    this.audioService.setVolume(event.target.value)
  }
  toggleAudio(){
    this.audioService.toggleAudio();
    if(this.toggleChecked == false){
      localStorage.setItem("toggleChecked", "true")
      this.toggleChecked = true
    }else{
      localStorage.setItem("toggleChecked", "false")
      this.toggleChecked = false
    }    
  }
  close() {
    this.modalController.dismiss();
  }
}

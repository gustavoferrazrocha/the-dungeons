import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  public audio = new Audio('assets/sounds/8bit.mp3');
  public muted: boolean;
  constructor() {
    this.audio.loop = true;
    this.muted = true
  }
  async defaultAudio(beepId) {
   this.audio=  new Audio(`assets/sounds/8bit${beepId}.mp3`);
   this.audio.loop = true;
   }
  toggleAudio(){
    if(!this.muted){
      this.muted = true;
      this.audio.muted = true;
    }else{
      this.audio.muted = false;
      this.muted = false;
      this.audio.play();

    }
  }
  getVolume(){
   return this.audio.volume * 100;
  }
  setVolume(volume){
    this.audio.volume = volume / 100;
  }
  audioPlay(){
    this.audio.play();
  }
}

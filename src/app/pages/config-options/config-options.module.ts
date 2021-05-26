import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ConfigOptionsPageRoutingModule } from './config-options-routing.module';

import { ConfigOptionsPage } from './config-options.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigOptionsPageRoutingModule
  ],
  declarations: [ConfigOptionsPage]
})
export class ConfigOptionsPageModule {}

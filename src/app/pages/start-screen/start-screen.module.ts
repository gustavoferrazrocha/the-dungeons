import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartScreenPageRoutingModule } from './start-screen-routing.module';

import { StartScreenPage } from './start-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartScreenPageRoutingModule
  ],
  declarations: [StartScreenPage]
})
export class StartScreenPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameScreenPage } from './game-screen.page';

const routes: Routes = [
  {
    path: '',
    component: GameScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameScreenPageRoutingModule {}

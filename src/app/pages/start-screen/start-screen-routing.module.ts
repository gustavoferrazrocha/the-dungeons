import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartScreenPage } from './start-screen.page';

const routes: Routes = [
  {
    path: '',
    component: StartScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartScreenPageRoutingModule {}

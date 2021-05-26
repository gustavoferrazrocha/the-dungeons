import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigOptionsPage } from './config-options.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigOptionsPageRoutingModule {}

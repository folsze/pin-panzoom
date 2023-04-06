import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanzoomPage } from './panzoom.page';

const routes: Routes = [
  {
    path: '',
    component: PanzoomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanzoomPageRoutingModule {}

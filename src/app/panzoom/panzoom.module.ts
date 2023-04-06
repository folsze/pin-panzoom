import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanzoomPageRoutingModule } from './panzoom-routing.module';

import { PanzoomPage } from './panzoom.page';
import {InlineSVGModule} from 'ng-inline-svg-2';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
      HttpClientModule,
      CommonModule,
        FormsModule,
        IonicModule,
        PanzoomPageRoutingModule,
        InlineSVGModule
    ],
  declarations: [PanzoomPage]
})
export class PanzoomPageModule {}

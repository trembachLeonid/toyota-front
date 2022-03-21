import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { ToyotaModule } from '../toyota/toyota.module';
import { ChooseColorComponent } from './choose-color/choose-color.component';
import { ConfirmButtonComponent } from './confirm-button/confirm-button.component';

@NgModule({
  exports: [ChooseColorComponent],
  declarations: [
    ChooseColorComponent,
    ConfirmButtonComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: []
})
export class AddPageModule { }

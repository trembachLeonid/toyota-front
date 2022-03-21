import { NgModule } from '@angular/core';

import { ToyotaBarComponent } from './toyota.bar/toyota.bar.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  exports: [ToyotaBarComponent,
            AddButtonComponent,],
  declarations: [ToyotaBarComponent,
                AddButtonComponent,],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class ToyotaModule { }

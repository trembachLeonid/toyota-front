import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import components, { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToyotaModule } from './toyota/toyota.module';
import { HttpClientModule } from "@angular/common/http";
import { ToyotaComponent } from './toyota/toyota.component';
import { CommonModule } from '@angular/common';
import { AddPageComponent } from './add-page/add-page.component';
import { AddPageModule } from './add-page/add-page.module';

@NgModule({
  declarations: [
    AppComponent,
    ToyotaComponent,
    AddPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToyotaModule,
    AddPageModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

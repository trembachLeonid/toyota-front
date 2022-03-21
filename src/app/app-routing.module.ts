import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPageComponent } from './add-page/add-page.component';
import { AppComponent } from './app.component';
import { ToyotaComponent } from './toyota/toyota.component';

const routes: Routes = [
  { path: '', component: ToyotaComponent },
  { path: 'add', component: AddPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

const components = [ToyotaComponent, AddPageComponent];
export default components;
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCityComponent } from './my-city.component';

const routes: Routes = [
  {
    path: '',
    component: MyCityComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class MyCityModule {}

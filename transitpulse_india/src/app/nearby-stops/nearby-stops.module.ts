import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NearbyStopsComponent } from './nearby-stops.component';

const routes: Routes = [
  {
    path: '',
    component: NearbyStopsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class NearbyStopsModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanTripComponent } from './plan-trip.component';

const routes: Routes = [
  {
    path: '',
    component: PlanTripComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class PlanTripModule {}

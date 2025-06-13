import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavedRoutesComponent } from './saved-routes.component';

const routes: Routes = [
  {
    path: '',
    component: SavedRoutesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class SavedRoutesModule {}

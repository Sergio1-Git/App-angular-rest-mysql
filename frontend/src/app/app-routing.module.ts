import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameFormComponent } from './site/pages/game-form/game-form.component';
import { GameListComponent } from './site/pages/game-list/game-list.component';

const routes: Routes = [
  { path: '', component: GameListComponent },
  { path: 'form', component: GameFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

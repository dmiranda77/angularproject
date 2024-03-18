import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveListComponent } from './pages/reactive-list/reactive-list.component';

const routes: Routes = [
  {
    path: '',
    component: ReactiveListComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactiveformRoutingModule {}
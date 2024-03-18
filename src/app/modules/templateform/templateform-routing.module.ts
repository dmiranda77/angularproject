import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TemplateListComponent } from './pages/template-list/template-list.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateListComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateformRoutingModule {}
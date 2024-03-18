import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateListComponent } from './pages/template-list/template-list.component';
import { TemplateformRoutingModule } from './templateform-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TemplateListComponent],
  imports: [CommonModule, TemplateformRoutingModule, FormsModule],
})
export class TemplateformModule {}
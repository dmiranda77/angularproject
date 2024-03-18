import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveListComponent } from './pages/reactive-list/reactive-list.component';
import { ReactiveformRoutingModule } from './reactiveform-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReactiveListComponent],
  imports: [CommonModule, ReactiveformRoutingModule, ReactiveFormsModule],
  exports: [ReactiveformRoutingModule],
})
export class ReactiveformModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BookFormComponent } from './pages/book-form/book-form.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';



@NgModule({
  declarations: [
    BookFormComponent,
    BookListComponent,
    BookItemComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class BookModule { }

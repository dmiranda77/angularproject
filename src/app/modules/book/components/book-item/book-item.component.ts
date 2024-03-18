import { Component, Input } from '@angular/core';
import { BookForm } from '../../model/book.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss'
})
export class BookItemComponent {
  @Input () bookInput: BookForm| undefined;
  // @Output() edit = new EventEmitter<number>();
  // @Output() delete = new EventEmitter<number>();
  
  editBook() {
    if (this.bookInput) {
      // this.edit.emit(this.bookInput.id);
      console.log(this.bookInput.title);
      console.log(this.bookInput);
    }
  }
  
  deleteBook() {
    if (this.bookInput) {
      // this.delete.emit(this.bookInput.id);
      console.log(this.bookInput.title);
      console.log(this.bookInput);
    }
  }
  
}

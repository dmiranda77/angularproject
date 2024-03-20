import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookForm } from '../../model/book.model';
import { Router } from '@angular/router';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {
  @Input () bookInput: BookForm| undefined;
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
  
  constructor(private router: Router,
    private bookService: BookService) {}
  editBook() {
    if (this.bookInput && this.bookInput.id) {
      this.edit.emit(this.bookInput.id); // Emit the blog ID
      this.router.navigate(['book/form'], { queryParams: { id: this.bookInput.id } });
    }
  }
  
  deleteBook() {
    if (this.bookInput && this.bookInput.id) {
      const bookId = this.bookInput.id;
      this.bookService.deleteBook(bookId).subscribe(() => {
        this.delete.emit(bookId); 
      }, error => {
        console.error('Error deleting blog:', error);
      });
    }
  }
  
}

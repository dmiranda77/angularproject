import { Component, OnInit } from '@angular/core';
import { BookForm } from '../../model/book.model';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: BookForm[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.bookService.getAllBooks().subscribe(
      books => {
        this.books = books;
      },
      error => {
        console.error('Error fetching books:', error);
      }
    );
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe(() => {
      this.fetchBooks(); // Update the list after deletion
    });
  }

  deleteAllBooks(): void {
    this.bookService.deleteAllBooks().subscribe(() => {
      this.fetchBooks(); // Update the list after deletion
    });
  }
}

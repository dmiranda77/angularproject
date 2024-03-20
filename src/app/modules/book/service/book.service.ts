import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookForm } from '../model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:3000/books';

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<BookForm[]> {
    return this.http.get<BookForm[]>(this.apiUrl);
  }

  addBook(book: BookForm): Observable<BookForm> {
    return this.http.post<BookForm>(this.apiUrl, book);
  }

  getBookById(id: number): Observable<BookForm> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<BookForm>(url);
  }

  updateBook(book: BookForm): Observable<any> {
    const url = `${this.apiUrl}/${book.id}`;
    return this.http.put(url, book);
  }

  deleteBook(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  deleteAllBooks(): Observable<any> {
    return this.http.delete(this.apiUrl);
  }
}

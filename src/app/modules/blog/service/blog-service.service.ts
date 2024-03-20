import { Injectable } from '@angular/core';
import { BlogForm } from '../model/blog-form';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {
  private apiUrl = 'http://localhost:3000/blogs';

  constructor(private http: HttpClient) { }

  getAllBlogs(): Observable<BlogForm[]> {
    return this.http.get<BlogForm[]>(this.apiUrl);
  }

  addBlog(blog: BlogForm): Observable<BlogForm> {
    return this.http.post<BlogForm>(this.apiUrl, blog);
  }

  getBlogsById(id: number): Observable<BlogForm> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<BlogForm>(url);
  }

  updateBlog(blog: BlogForm): Observable<any> {
    const url = `${this.apiUrl}/${blog.id}`;
    return this.http.put(url, blog);
  }

  deleteBlog(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  deleteAllBlogs(): Observable<any> {
    return this.http.delete(this.apiUrl);
  }
  
}

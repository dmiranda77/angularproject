import { Component } from '@angular/core';
import { BlogForm } from '../../model/blog-form';
import { BlogServiceService } from '../../service/blog-service.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent {
  blogs: BlogForm[] = [];

  constructor(private blogService: BlogServiceService) { }

  ngOnInit(): void {
    this.fetchBlogs();
  }

  fetchBlogs(): void {
    this.blogService.getAllBlogs().subscribe(
      blogs => {
        this.blogs = blogs;
      },
      error => {
        console.error('Error fetching blogs:', error);
      }
    );
  }

  deleteBlog(id: number): void {
    this.blogService.deleteBlog(id).subscribe(() => {
      this.fetchBlogs(); // Update the list after deletion
    });
  }

  deleteAllBlogs(): void {
    this.blogService.deleteAllBlogs().subscribe(() => {
      this.fetchBlogs(); // Update the list after deletion
    });
  }
}

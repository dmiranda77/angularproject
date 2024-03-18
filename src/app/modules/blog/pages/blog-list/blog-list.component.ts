import { Component } from '@angular/core';
import { BlogForm } from '../../model/blog-form';
import { BlogServiceService } from '../../service/blog-service.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent {
  blogs: BlogForm[] = [
  ];
  constructor(private blogService: BlogServiceService) { }

  ngOnInit(): void {
    this.blogs = this.blogService.getAllBlogs();
  }
  deleteBlog(id: number) {
    this.blogService.deleteBlog(id);
    this.blogs = this.blogs.filter(blog => blog.id !== id);
  }
  deleteAllBlog() {
    this.blogService.deleteAllBlogs()
    return this.blogs
  }
}

import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { BlogForm } from '../../model/blog-form';
import { BlogFormComponent } from '../../pages/blog-form/blog-form.component';
import { Router } from '@angular/router';
import { BlogServiceService } from '../../service/blog-service.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.scss'
})
export class BlogItemComponent {
  @Input () blogInput: BlogForm | undefined;
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  constructor(private router: Router, private blogService: BlogServiceService) {}
  
  editBlog() {
    if (this.blogInput && this.blogInput.id) {
      this.edit.emit(this.blogInput.id); // Emit the blog ID
      this.router.navigate(['blog/form'], { queryParams: { id: this.blogInput.id } });
    }
  }
  
  deleteBlog() {
    if (this.blogInput && this.blogInput.id) {
      const blogId = this.blogInput.id;
      this.blogService.deleteBlog(blogId).subscribe(() => {
        this.delete.emit(blogId); 
      }, error => {
        console.error('Error deleting blog:', error);
      });
    }
  }
  }
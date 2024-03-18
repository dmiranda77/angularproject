import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { BlogForm } from '../../model/blog-form';
import { BlogFormComponent } from '../../pages/blog-form/blog-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.scss'
})
export class BlogItemComponent {
  @Input () blogInput: BlogForm | undefined;
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  constructor(private router: Router) {}
  
  editBlog() {
    if (this.blogInput) {
      this.edit.emit(this.blogInput.id);
      console.log(this.blogInput.title);
      console.log(this.blogInput);
      this.router.navigate(['blog/form'], { queryParams: { id: this.blogInput.id } });
    }
  }
  
  deleteBlog() {
    if (this.blogInput) {
      this.delete.emit(this.blogInput.id);
      console.log(this.blogInput.title);
      console.log(this.blogInput);
    }
  }
  
  }
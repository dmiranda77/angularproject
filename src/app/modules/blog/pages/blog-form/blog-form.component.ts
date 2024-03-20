import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlogForm } from '../../model/blog-form';
import { BlogServiceService } from '../../service/blog-service.service';
import { checkValidName } from '../../../profile/validator/profile.validator';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {
  blogForm: FormGroup;
  blogId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute, 
    private blogService: BlogServiceService
  ) {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      description: '',
      author: ['', [Validators.required, checkValidName()]],
      comments: ''
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.blogId = +params['id'];
      if (this.blogId) {
        this.fetchBlogDetails(this.blogId);
      } else {
        this.clear(); // Clear form if no blogId is provided
      }
    });
  }

  fetchBlogDetails(id: number): void {
    this.blogService.getBlogsById(id).subscribe(
      (blog: BlogForm) => {
        this.blogForm.patchValue(blog);
      },
      error => {
        console.error('Error fetching blog details:', error);
      }
    );
  }

  onSubmit() {
    if (this.blogForm.valid) {
      const blogData = this.blogForm.value;
      if (this.blogId !== null) {
        // If blogId is not null, it means we're updating an existing blog
        blogData.id = this.blogId; // Make sure to include the ID
        this.updateBlog(blogData);
      } else {
        this.addBlog(blogData);
      }
    }
  }

  addBlog(blog: BlogForm) {
    this.blogService.addBlog(blog).subscribe(
      () => {
        console.log('Blog added successfully');
        this.clear(); // Clear form after successful submission
      },
      error => {
        console.error('Error adding blog:', error);
      }
    );
  }

  updateBlog(blog: BlogForm) {
    this.blogService.updateBlog(blog).subscribe(
      () => {
        console.log('Blog updated successfully');
      },
      error => {
        console.error('Error updating blog:', error);
      }
    );
  }

  clear() {
    this.blogForm.reset();
  }

  get title() {
    return this.blogForm.get('title');
  }

  get author() {
    return this.blogForm.get('author');
  }
}

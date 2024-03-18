import { Component, OnInit } from '@angular/core';
import {  
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators, } from '@angular/forms';
import { checkValidName } from '../../../profile/validator/profile.validator';
import { ActivatedRoute } from '@angular/router';
import { BlogForm } from '../../model/blog-form';
import { BlogServiceService } from '../../service/blog-service.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.scss'
})
export class BlogFormComponent implements OnInit {
  blogForm: FormGroup;
  commentFormArray: FormArray;

  // constructor
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private blogService: BlogServiceService)
 {
    this.blogForm = this.fb.group({
      id: 0,
      title: 
      [
        { value: ''},
        [Validators.required]
      ],
      description: '',
      author: [
        { value: ''},
        [Validators.required, checkValidName()]
      ],
      // comments: this.fb.array([new FormControl('Wow'), new FormControl('So Nice')]),
      comments: this.fb.array([]),
    });

    this.commentFormArray = this.blogForm.get('comments') as FormArray;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this.fetchBlogDetails(id);
      }
    });
  }

  fetchBlogDetails(id: number): void {
    const blog = this.blogService.getBlogsById(id);
    if (blog) {
      this.blogForm.patchValue(blog);
    }
  }

  onSubmit = () => {
    console.log(this.blogForm.value);

  };
  addComment() {
    this.commentFormArray.push(new FormControl(''));
  }
  addUser() {
    this.blogForm.addControl('newControl', new FormControl(''));
  }

  deleteComment(index: number) {
    this.commentFormArray.removeAt(index);
  }

  clear = () => {
    this.blogForm.reset();
  };

  // manualChangeState = () => {
  //   this.userProfileForm.get('knownAs')?.setErrors({ incorrect: true });
  //   this.userProfileForm.get('lastName')?.disable();
  //   this.userProfileForm.addControl('otherControl', new FormControl());
  // };

  get title() {
    return this.blogForm.get('title') as FormControl;
  }
  get author() {
    return this.blogForm.get('author') as FormControl;
  }
}

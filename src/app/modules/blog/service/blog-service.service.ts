import { Injectable } from '@angular/core';
import { BlogForm } from '../model/blog-form';
import { BlogFormComponent } from '../pages/blog-form/blog-form.component';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {
  private blogs: BlogForm [] = [
    {
      id: 1,
      title: "How to Cook Sinigang",
      description: 'this Blog creates a process on how to cook a Filipino soup-dish, SINIGANG',
      author: "Diana Miranda",
      comments: ['Great Post', 'Thanks for sharing']
    },
    {
      id: 2,
      title: "How to Sew a Dress",
      description: 'Brief procedure to sew a Dress',
      author: "Diana Miranda",
      comments: ['Great Post', 'Nice']
    },
    {
      id: 3,
      title: "DIY Cebu-Bohol Tour",
      description: 'Gives you complete budget list with itinerary for your next Cebu-Bohol Tour',
      author: "Diana Miranda",
      comments: ['Wish to be there', 'such a Beautiful place', 'wow ! not too expensive']
    }
  ];


  constructor() { }
  getAllBlogs(): BlogForm[] {
    return this.blogs;
  }

  addBlog(blog: BlogForm): void {
    this.blogs.push(blog);
  }
  
  getBlogsById(id: number): BlogForm | undefined {
    return this.blogs.find(blog => blog.id === id);
  }
  deleteBlog(id: number): void {
    const index = this.blogs.findIndex(blog => blog.id === id);
    if (index !== -1) {
      this.blogs.splice(index, 1);
    }
  }
  deleteAllBlogs(): void {
    // Remove all blogs from the array
    this.blogs = [];
  }
  
}

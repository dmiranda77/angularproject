import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { EmptyBlogComponent } from './components/empty-blog/empty-blog.component';



@NgModule({
  declarations: [
    BlogFormComponent,
    BlogListComponent,
    BlogItemComponent,
    EmptyBlogComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class BlogModule { }

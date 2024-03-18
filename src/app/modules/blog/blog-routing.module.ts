import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { EmptyBlogComponent } from './components/empty-blog/empty-blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogListComponent
  },
  {
    path: 'form',
    component: BlogFormComponent
  },
  {
    path: 'list/empty',
    component: BlogListComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BlogRoutingModule { }

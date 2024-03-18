import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'addUser',
    loadChildren: () =>
      import('./modules/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./modules/blog/blog.module').then(
        (m) => m.BlogModule
      ),
  },
  {
    path: 'book',
    loadChildren: () =>
      import('./modules/book/book.module').then(
        (m) => m.BookModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
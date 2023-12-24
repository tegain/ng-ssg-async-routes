import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'posts',
    loadComponent: () => import('./posts/posts.component').then(m => m.PostsComponent)
  },
  {
    path: 'posts/:id',
    loadComponent: () => import('./post/post.component').then(m => m.PostComponent)
  }
];

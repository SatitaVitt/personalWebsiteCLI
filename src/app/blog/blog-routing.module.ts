import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPostComponent } from './blog-post/blog-post.component';

import { BlogComponent } from './blog.component';

const routes: Routes = [
 
  { path: ":postId", component: BlogPostComponent },
  { path: "", component: BlogComponent },
  
  { path: ':slug', component: BlogComponent },
  { path: '**', component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}


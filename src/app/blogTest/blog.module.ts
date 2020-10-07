import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { MarkdownModule } from 'ngx-markdown';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BlogComponent } from './blog.component';
import { BlogPostViewComponent } from './post/blog-post-view.component';


@NgModule({
    declarations: [BlogComponent, BlogPostViewComponent],
    
    imports: [
      CommonModule,
      RouterModule.forChild([
        
        
        { path: ":postId", component: BlogPostViewComponent },
        { path: "", component: BlogComponent }
        /*
        {path: '', pathMatch: 'full',
                 loadChildren: './blog/blog-view.module#BlogViewModule'},
        {path: 'post', 
                 loadChildren: './post/blog-post-view.module#BlogPostViewModule'},
                 */
      ]),
      //MarkdownModule.forRoot()
      ScullyLibModule
    ]
  })
  export class BlogModule { }
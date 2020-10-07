import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { Subscription } from 'rxjs';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { combineLatest } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

@Component({
    selector: 'app-blog-post-view',
    styleUrls: ['./blog-post-view.component.scss'],
    templateUrl: './blog-post-view.component.html'
  })
  export class BlogPostViewComponent{
    constructor(
        private activatedRoute: ActivatedRoute,
        private scully: ScullyRoutesService
      ) {}
    
      $blogPostMetadata = combineLatest([
        this.activatedRoute.params.pipe(pluck('postId')),
        this.scully.available$
      ]).pipe(
        map(([postId, routes]) =>
          routes.find(route => route.route === `/blog/${postId}`)
        )
      );
  /*
    private sub: Subscription;
  
    post: string;
  
    constructor(private route: ActivatedRoute) {
  
    }
  
    ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        this.post = './assets/blog/post/' +  params['id'] + '.md';
      });
    }
  
    ngOnDestroy() {
      if (this.sub) {
        this.sub.unsubscribe();
      }
    }*/
  
  }
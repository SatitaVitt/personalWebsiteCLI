import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';
//declare var $: any;

//declare const jQuery : any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  $blogPosts: any;
  constructor(private scully: ScullyRoutesService) {
    
  }

  ngOnInit(): void {
    
    this.scully.available$.subscribe(routes => console.log(routes));
    this.$blogPosts = this.scully.available$.pipe(
      map(routes =>
        routes.filter(
          route =>
            route.route.startsWith('/blog/') && route.sourceFile.endsWith('.md')
        )
      )
    );

    //this.$blogPosts = $getblogPosts;
  }
  

}

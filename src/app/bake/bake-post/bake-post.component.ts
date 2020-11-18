import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { combineLatest } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-bake-post',
  templateUrl: './bake-post.component.html',
  styleUrls: ['./bake-post.component.css']
})
export class BakePostComponent {

  constructor(
    private activatedRoute: ActivatedRoute,
    private scully: ScullyRoutesService
  ) {}

  $bakePostMetadata = combineLatest([
    this.activatedRoute.params.pipe(pluck('title')),
    this.scully.available$
  ]).pipe(
    map(([title, routes]) =>
      routes.find(route => route.route === `/bake/${title}`)
    )
  );

}

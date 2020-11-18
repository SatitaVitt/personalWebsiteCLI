import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';

declare var ng: any;

@Component({
  selector: 'app-bake',
  templateUrl: './bake.component.html',
  styleUrls: ['./bake.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class BakeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private scully: ScullyRoutesService) {
  }


  ngOnInit(): void {
    this.scully.available$.subscribe(routes => console.log(routes));
  }

  $bakePosts = this.scully.available$.pipe(
    map(routes =>
      routes.filter(
        route =>
          route.route.startsWith('/bake/') && route.sourceFile.endsWith('.md')
      )
    )
  );
}

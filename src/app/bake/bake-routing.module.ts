import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { BakePostComponent } from './bake-post/bake-post.component';

import {BakeComponent} from './bake.component';

const routes: Routes = [
  //{ path: ":postId", component: BakePostComponent },
  { path: "", component: BakeComponent },

  { path: ':title', component: BakePostComponent },
  { path: '**', component: BakeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BakeRoutingModule {}


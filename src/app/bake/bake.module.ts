import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {BakeRoutingModule} from './bake-routing.module';
import {BakeComponent} from './bake.component';
import { BakePostComponent } from './bake-post/bake-post.component';

@NgModule({
  declarations: [BakeComponent, BakePostComponent],
  imports: [CommonModule, BakeRoutingModule, ScullyLibModule],
})
export class BakeModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaRoutingModule } from './social-media-routing.module';
import { PostService } from './service/post.service';
import { PostResolver } from './resolvers/post.resolver';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    SocialMediaRoutingModule,
    // SharedModule
  ],
  providers:[
    PostResolver,
    PostService
  ]
})
export class SocialMediaModule { }

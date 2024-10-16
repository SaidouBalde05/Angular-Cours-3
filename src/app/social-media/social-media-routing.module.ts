import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { Post } from './models/post.model';
import { PostResolver } from './resolvers/post.resolver';

const routes: Routes = [
  {path: '', component: PostListComponent, resolve: {posts : PostResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialMediaRoutingModule { }

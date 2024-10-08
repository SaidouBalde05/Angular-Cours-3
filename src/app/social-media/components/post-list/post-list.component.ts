import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Post } from '../../models/post.model';
import { PostListItemComponent } from "../post-list-item/post-list-item.component";
import { AsyncPipe, CommonModule } from '@angular/common';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    PostListItemComponent,
    AsyncPipe,
    CommonModule
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit{
  posts$!: Observable<Post[]>;

  constructor(private route: ActivatedRoute,
              private postsService: PostService
  ) { }

  ngOnInit(): void {
    this.posts$ = this.route.data.pipe(
      map(data => data['posts'])
    );
  }

  // onPostCommented(postCommented:{comment: string, postId: number}){
  //   this.postService.addNewComment(postCommented)
  // }
  onPostCommented(postCommented: { comment: string, postId: number }) {
    this.postsService.addNewComment(postCommented);
}
}

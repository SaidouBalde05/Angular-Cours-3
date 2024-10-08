import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Post } from '../../models/post.model';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { CommentsComponent } from "../../../shared/components/comments/comments.component";
import { ShortenPipe } from '../../../shared/pipe/shorten.pipe';
import { SharedModule } from '../../../shared/shared.module';
import { first, last } from 'rxjs';

@Component({
  selector: 'app-post-list-item',
  standalone: true,
  imports: [
    TitleCasePipe,
    MatCardModule,
    DatePipe,
    CommonModule,
    FormsModule,
    CommentsComponent,
    SharedModule
],
  templateUrl: './post-list-item.component.html',
  styleUrl: './post-list-item.component.scss'
})
export class PostListItemComponent {
  @Input() post!: Post;
  @Output() postCommented = new EventEmitter<{ comment: string, postId: number }>();
  // tempUser = { firstName: 'saidou', lastName: 'BALDE'}

  onNewComment(comment: string) {
    this.postCommented.emit({ comment, postId: this.post.id });
  }
}

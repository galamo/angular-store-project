import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments/comments.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  @Input() comments: Array<any>;
  constructor(public commentsService: CommentsService) { }

  ngOnInit(): void {
  }

  deleteComment(commentId: number) {
    this.commentsService.deleteComment(commentId)
  }

}

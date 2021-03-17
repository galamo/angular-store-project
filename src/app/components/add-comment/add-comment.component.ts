import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  @Output() sendComment = new EventEmitter<string>()
  public commentString: string
  constructor() {
    this.commentString = "";
  }

  ngOnInit(): void {
  }

  addComment() {
    if (!this.commentString) return;
    this.sendComment.emit(this.commentString)
    this.commentString = "";
  }
}

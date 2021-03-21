import { Injectable } from '@angular/core';

interface IComment {
  mealName: string,
  comment: string,
  commentId: number,
  createdAt: string
}



@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  public comments: Array<IComment>
  constructor() {
    this.comments = [{
      commentId: 1, mealName: "Brown eggs",
      comment: "this is hardcoded comment", createdAt: new Date().toDateString()
    }];
  }

  getComments(mealName: string): Array<IComment> {
    return this.comments.filter(comment => comment.mealName === mealName)
  }

  addComment(mealName: string, comment: string) {
    if (!mealName) return;
    if (!comment) return;
    const createdAt = new Date();
    this.comments.push({
      comment,
      mealName,
      createdAt: createdAt.toLocaleDateString(),
      commentId: createdAt.getTime()
    })
  }

  deleteComment(commentId: number) {
    const indexToDelete = this.comments.findIndex(comment => comment.commentId === commentId)
    if (indexToDelete < 0) return;
    this.comments.splice(indexToDelete, 1)
  }

  deleteComments(mealName: string) {
    this.comments = this.comments.filter(comment => comment.mealName !== mealName)
  }


}




import { Component } from '@angular/core';
import { CommentsService } from './services/comments/comments.service';

@Component({
  selector: 'app-root', //<app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store';

  constructor(public commentsService: CommentsService) {
    
  }
}

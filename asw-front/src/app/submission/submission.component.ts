import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comments } from '../modelos/Comments';
import { News } from '../modelos/News';
import { User } from '../modelos/User';
import { SubmissionControllerComponent } from '../submission-controller/submission-controller.component';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css'],
})
export class SubmissionComponent implements OnInit {
  submission: News;
  comments: Comments[] = [];

  likeClass: string = 'not-liked';
  points: number = 0;
  likeClassComments: Map<number, string> = new Map<number, string>();
  pointsComments: Map<number, number> = new Map<number, number>();
  commentId: string[] = [];

  constructor(
    private submissionControllerComponent: SubmissionControllerComponent,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id: string | null = localStorage.getItem('submission');
    if (typeof id === 'string') {
      this.submissionControllerComponent.getSubmission(id).then((data) => {
        this.submission = data;
        let found: Boolean = false;
        this.likeClass = 'not-liked';
        if (this.submission.likedBy != null) {
          for (let i = 0; i < this.submission.likedBy.length && !found; i++) {
            if (
              this.submission.likedBy[i].username ===
              localStorage.getItem('username')
            ) {
              found = true;
              this.likeClass = 'liked';
            }
          }
          this.points = this.submission.likedBy.length;
        }
      });
      this.htmlcode();

      for (let m = 0; m < this.commentId.length; m++) {
        const elem = document.getElementById(this.commentId[m]);
        if (elem != null) {
          elem.addEventListener('click', (e) => {
            e.preventDefault();
            this.likeBtnComment();
          });
        }
      }
    }
  }

  async likeBtn(btnid: string) {
    let name = localStorage.getItem('username');
    let key = localStorage.getItem('apiKey');
    let newsId = localStorage.getItem("submission")

    let jsonSubmit = {
      user: {
        username: name,
      },
      id: newsId,
    };

    if (typeof name === 'string' && typeof key === 'string') {
      const response = await fetch(environment.BASE_URL + '/news/like', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          username: name,
          apiKey: key,
        },
        body: JSON.stringify(jsonSubmit),
      });
    }
    this.likeClass = this.likeClass == 'liked' ? 'not-liked' : 'liked';
    this.points += this.likeClass == 'liked' ? 1 : -1;
  }

  async likeBtnComment() {
    let id: string = '';
    let jsonSubmit = {
      username: localStorage.getItem('username'),
    };

    const response = await fetch(
      environment.BASE_URL + '/comment/' + id + '/like',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonSubmit),
      }
    );

    let numid: number = +id;

    this.likeClassComments.set(
      numid,
      this.likeClassComments.get(numid) == 'liked' ? 'not-liked' : 'liked'
    );

    let pointsDiff: number =
      this.likeClassComments.get(numid) == 'liked' ? 1 : -1;
    let currentPoints: number | undefined = this.pointsComments.get(numid);
    if (typeof currentPoints === 'number') {
      this.pointsComments.set(numid, currentPoints + pointsDiff);
    }
  }

  commentsection: string = '';
  getCommentSection() {
    return this.commentsection;
  }

  public async htmlcode() {
    let dynamicTemplate = `
    <div>
      <div>[SUPERCHRIS]</div>
    </div>`;

    let idNews: string | null = localStorage.getItem('submission');
    let commentaries;
    if (idNews !== null) {
      await this.submissionControllerComponent
        .getCommentaries(idNews)
        .then((data) => {
          commentaries = data;
        });
      commentaries = commentaries as unknown as Comments[];
      for (let i = commentaries.length - 1; i > -1; --i) {
        let comment;
        await this.submissionControllerComponent
          .getComments(commentaries[i].id.toString())
          .then((data) => {
            comment = data;
          });

        this.getHtml(comment as unknown as Comments, 0);
      }
      dynamicTemplate.replace('[SUPERCHRIS]', this.commentsection);
    }
    return dynamicTemplate;
  }

  private getHtml(comment: Comments, margin: number) {
    let id = comment.id;
    const left = 'com' + margin.toString();
    const rep = 'rep' + comment.id.toString();
    let points = comment.likedBy.length;
    this.pointsComments.set(comment.id, points);

    let found: Boolean = false;
    this.likeClassComments.set(id, 'not-liked');
    for (let j = 0; j < comment.likedBy.length && !found; j++) {
      if (comment.likedBy[j].username === localStorage.getItem('username')) {
        this.likeClassComments.set(id, 'liked');
        found = true;
      }
    }
    let likeClassCom = this.likeClassComments.get(comment.id);
    let idstr = 'a' + id.toString();

    if (comment.replies.length == 0) {
      this.commentsection += `
      <div class="comment ${left}">
                                <div class="comment-info">
                                  <div
                                    alt="heart"
                                    #elem
                                    class="${likeClassCom} ${idstr}"
                                  ></div>
                                  <p class="comment-points">0 points</p>
                                  <p class="comment-user">
                                    by <span>${comment.user.username}</span>
                                  </p>
                                  <p class="comment-date">at ${comment.time}</p>
                                </div>
                                <div class="comment-body">
                                  <p class="comment-text">${comment.body}</p>
                                </div>
                                <div class="comment-reply">
                                  <a
                                    id=${rep}
                                    #elem
                                    class="reply-btn"
                                    (click)="goToReply(elem.id)"
                                    >reply
                                  </a>
                                </div>
                              </div>`;
      const elem = document.getElementsByClassName('not-liked');
      for (let n = 0; n < elem.length; n++) {
        elem[n].id = elem[n].classList[1];
        this.commentId.push(elem[n].id);
      }

      const elem2 = document.getElementsByClassName('liked');
      for (let s = 0; s < elem2.length; s++) {
        elem2[s].id = elem2[s].classList[1];
        this.commentId.push(elem2[s].id);
      }
    }

    for (let i = 0; comment.replies.length > i; i++) {
      let id = comment.id;
      const left = 'com' + margin.toString();
      const rep = 'rep' + comment.id.toString();
      let points = comment.likedBy.length;
      this.pointsComments.set(comment.id, points);

      let found: Boolean = false;
      this.likeClassComments.set(id, 'not-liked');
      for (let j = 0; j < comment.likedBy.length && !found; j++) {
        if (comment.likedBy[j].username === localStorage.getItem('username')) {
          this.likeClassComments.set(id, 'liked');
          found = true;
        }
      }
      let likeClassCom = this.likeClassComments.get(comment.id);

      this.commentsection += `<div class="comment ${left}">
                                <div class="comment-info">
                                  <div
                                    alt="heart"
                                    #elem
                                    class="${likeClassCom} ${idstr}"
                                  ></div>
                                  <p class="comment-points">0 points</p>
                                  <p class="comment-user">
                                    by <span>${comment.user.username}</span>
                                  </p>
                                  <p class="comment-date">at ${comment.time}</p>
                                </div>
                                <div class="comment-body">
                                  <p class="comment-text">${comment.body}</p>
                                </div>
                                <div class="comment-reply">
                                  <a
                                    id=${rep}
                                    #elem
                                    class="reply-btn"
                                    (click)="goToReply(elem.id)"
                                    >reply
                                  </a>
                                </div>
                              </div>`;
      const elem = document.getElementsByClassName('not-liked');
      for (let n = 0; n < elem.length; n++) {
        if (elem[n].classList.length > 1) {
          elem[n].id = elem[n].classList[1];
          this.commentId.push(elem[n].id);
        }
      }

      const elem2 = document.getElementsByClassName('liked');
      for (let n = 0; n < elem2.length; n++) {
        if (elem2[n].classList.length > 1) {
          elem2[n].id = elem2[n].classList[1];
          this.commentId.push(elem2[n].id);
        }
      }
      this.getHtml(comment.replies[i], margin + 3);
    }
  }

  addComment() {
    let title: string = (document.getElementById('text') as HTMLInputElement).value;
    this.submissionControllerComponent.setCommentaries(localStorage.getItem('submission') as string, title)
  }

  goToReply(id: string){
    localStorage.setItem('commentary', id);
    this.router.navigate(['reply']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css'],
})
export class ReplyComponent implements OnInit {
  replyText: string = '';
  replyId: string | null = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.replyId = localStorage.getItem('reply');
  }

  handleChangeReply(value: string) {
    this.replyText = value;
  }

  async addReply(): Promise<void> {
    let text: string = (document.getElementById('text') as HTMLInputElement).value;
    console.log(text)
    let name = localStorage.getItem('username') as string;
    let key = localStorage.getItem('apiKey') as string;
    let commentId = localStorage.getItem("commentary") as unknown as number
    let jsonSubmit = {
      id: commentId,
      comment:{
        user:{
          username: name
        },
          body:text,
          replies: [],
          likedBy:[]
      
      }
    };

    let id: string | null = localStorage.getItem('reply');

    const response = await fetch(
      environment.BASE_URL + '/news/reply',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          username: name,
          apiKey: key
        },
        body: JSON.stringify(jsonSubmit),
      }
    );
    this.router.navigate(['']);
  }
}

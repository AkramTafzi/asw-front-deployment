import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comments } from '../modelos/Comments';
import { News } from '../modelos/News';

@Injectable({
  providedIn: 'root',
})
export class SubmissionService {
  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders{
    var myheaders: HttpHeaders = new HttpHeaders()
      .set('username', localStorage.getItem('username') as string)
      .set('apiKey', localStorage.getItem('apiKey') as string)
    return myheaders;
  }
  
  public async getSubmission(id: string): Promise<News> {
    var myheaders = {headers: this.getHeaders()}
    let submission = await this.http
      .get<News>(environment.BASE_URL + '/news/' + id, myheaders)
      .toPromise();
    return submission as News;
  }

  public async getComments(idNews: string): Promise<Comments> {
    var myheaders = {headers: this.getHeaders()}
    let comment = await this.http
      .get<Comments>(environment.BASE_URL + '/comment/' + idNews, myheaders)
      .toPromise();
    return comment as unknown as Comments;
  }

  public async getCommentaries(idNews: string): Promise<number[]> {
    var myheaders = {headers: this.getHeaders()}
    let comments = await this.http
      .get<Comments[]>(environment.BASE_URL + '/news/' + idNews + '/comments', myheaders)
      .toPromise();
    return comments as unknown as number[];
  }

  public async setCommentaries(idNews: string, text:string){
    var myheaders = {headers:this.getHeaders()}
    var username = localStorage.getItem("username") as string
    var apiKey = localStorage.getItem("apiKey") as string
    var body = {
      id: idNews,
      comment:{
        user:{
          username: username
        },
        body: text,
        replies: [],
        likedBy: []
      }
    }
    console.log(body)
    const response = await fetch(environment.BASE_URL + '/news/newcomment', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        username: username,
        apiKey: apiKey,
      },
      body: JSON.stringify(body),
    });
  }
}

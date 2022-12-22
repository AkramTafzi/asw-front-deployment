import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comments } from '../modelos/Comments';
import { News } from '../modelos/News';
import { User } from '../modelos/User';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    var myheaders: HttpHeaders = new HttpHeaders()
      .set('username', localStorage.getItem('username') as string)
      .set('apiKey', localStorage.getItem('apiKey') as string);
    return myheaders;
  }

  public async getProfile(username: string): Promise<User> {
    var myheaders = { headers: this.getHeaders() };
    console.log(localStorage.getItem('apiKey') as string);
    let news = await this.http
      .get<User>("https://asw-back-deployment-production-700e.up.railway.app" + '/user?username=' + username, myheaders)
      .toPromise();
    return news as User;
  }

  public submit(user: any) {
    var myheaders = { headers: this.getHeaders() };
    this.http.post<any>("https://asw-back-deployment-production-700e.up.railway.app" + '/user', user, myheaders).subscribe();
  }

  public async getSubmissions(username: string): Promise<News[]> {
    var myheaders = { headers: this.getHeaders() };
    let news = await this.http
      .get<News[]>(
        "https://asw-back-deployment-production-700e.up.railway.app" + '/news/user?username=' + username,
        myheaders
      )
      .toPromise();
    return news as News[];
  }

  public async getComments(username: string): Promise<Comments[]> {
    var myheaders = { headers: this.getHeaders() };
    let comments = await this.http
      .get<Comments[]>(
        "https://asw-back-deployment-production-700e.up.railway.app" + '/comment/user/?username=' + username,
        myheaders
      )
      .toPromise();
    return comments as Comments[];
  }

  public async getVotedNews(username: string): Promise<News[]> {
    var myheaders = { headers: this.getHeaders() };
    let news = await this.http
      .get<News[]>(
        "https://asw-back-deployment-production-700e.up.railway.app" + '/news/liked?username=' + username,
        myheaders
      )
      .toPromise();
    return news as News[];
  }

  public async getVotedComments(username: string): Promise<Comments[]> {
    var myheaders = { headers: this.getHeaders() };
    let comments = await this.http
      .get<Comments[]>(
        "https://asw-back-deployment-production-700e.up.railway.app" + '/comments/liked?username=' + username,
        myheaders
      )
      .toPromise();
    return comments as Comments[];
  }
}

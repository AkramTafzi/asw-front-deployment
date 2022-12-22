import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { News } from '../modelos/News';

@Injectable({
  providedIn: 'root',
})
export class MySubmissionsServiceService {
  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    var myheaders: HttpHeaders = new HttpHeaders()
      .set('username', localStorage.getItem('username') as string)
      .set('apiKey', localStorage.getItem('apiKey') as string);
    return myheaders;
  }

  public async getMySubmissions(): Promise<News[]> {
    var myheaders = { headers: this.getHeaders() };
    const username = localStorage.getItem('username') as string;
    const params = new HttpParams().set('username', username);
    let news = await this.http
      .get<News[]>(
        environment.BASE_URL + '/news/user' + `?username=${username}`,
        myheaders
      )
      .toPromise();
    return news as unknown as News[];
  }
}

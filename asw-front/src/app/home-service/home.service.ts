import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { News } from '../modelos/News';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders{
    var myheaders: HttpHeaders = new HttpHeaders()
      .set('username', localStorage.getItem('username') as string)
      .set('apiKey', localStorage.getItem('apiKey') as string)
    return myheaders;
  }

  public async getNews(): Promise<News[]> {
    var myheaders = {headers: this.getHeaders()}
    let news = await this.http
      .get<News[]>(environment.BASE_URL + '/news', myheaders)
      .toPromise();
    return news as News[];
  }
}

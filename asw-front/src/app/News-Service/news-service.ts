import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { News } from '../modelos/News';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders{
    var myheaders: HttpHeaders = new HttpHeaders()
      .set('username', localStorage.getItem('username') as string)
      .set('apiKey', localStorage.getItem('apiKey') as string)
    return myheaders;
  }

  public async getNewest(): Promise<News[]>{
    var myheaders = {headers: this.getHeaders()}
    let news = await this.http.get<News[]>(environment.BASE_URL + "/newest", myheaders).toPromise()
    return news as News[]
  }

}

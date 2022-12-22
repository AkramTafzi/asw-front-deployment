import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comments } from '../modelos/Comments';

@Injectable({
  providedIn: 'root',
})
export class ThreadsService {
  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders{
    var myheaders: HttpHeaders = new HttpHeaders()
      .set('username', localStorage.getItem('username') as string)
      .set('apiKey', localStorage.getItem('apiKey') as string)
    return myheaders;
  }
  
  public async getThreads(): Promise<Comments[]> {
    var myheaders = {headers: this.getHeaders()}
    let threads = await this.http
      .get<Comments[]>(
        environment.BASE_URL +
          '/comment/user/' +
          localStorage.getItem('username'), myheaders
      )
      .toPromise();
    return threads as Comments[];
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SubmitService {
  private getHeaders(): HttpHeaders {
    var myheaders: HttpHeaders = new HttpHeaders()
      .set('username', localStorage.getItem('username') as string)
      .set('apiKey', localStorage.getItem('apiKey') as string);
    return myheaders;
  }
  constructor(private http: HttpClient) {}
  public submit(news: any) {
    var myheaders = { headers: this.getHeaders() };
    this.http
      .post<any>(environment.BASE_URL + '/submit', news, myheaders)
      .subscribe();
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { News } from '../modelos/News';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders{
    var myheaders: HttpHeaders = new HttpHeaders()
      .set('username', localStorage.getItem('username') as string)
      .set('apiKey', localStorage.getItem('apiKey') as string)
    return myheaders;
  }

  public async getShow(): Promise<News[]> {
    var myheaders = {headers: this.getHeaders()}
    let show = await this.http.get<News[]>(environment.BASE_URL + "/show", myheaders).toPromise();
    return show as News[];
  }
}

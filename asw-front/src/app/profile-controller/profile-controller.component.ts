import { Component, OnInit } from '@angular/core';
import { News } from '../modelos/News';
import { User } from '../modelos/User';
import { ProfileService } from '../profile-service/profile.service';

@Component({
  selector: 'app-profile-controller',
  templateUrl: './profile-controller.component.html',
  styleUrls: ['./profile-controller.component.css']
})
export class ProfileControllerComponent implements OnInit {

  constructor(private profileService: ProfileService) { 
  }
  ngOnInit(): void {
  }

  public async getProfile(username: string): Promise<User>{
    let user;
    await this.profileService.getProfile(username).then(data => {
      user = data;
    });
    return user as unknown as User;
  }

  public submit(user:any):void{
    this.profileService.submit(user)
  }

  public async getSubmissions(username:string): Promise<News[]>{
    let news: News[] = [];
    await this.profileService.getSubmissions(username).then(data =>{
      news = data;
    })
    return news;
  }

  public async getLikedSubmissions(username:string): Promise<News[]>{
    let news: News[] =[]
    await this.profileService.getVotedNews(username).then(data =>{
      news = data
    })
    return news as News[];
  }

}

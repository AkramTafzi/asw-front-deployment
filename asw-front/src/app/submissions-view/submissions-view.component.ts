import { Component, OnInit } from '@angular/core';
import { News } from '../modelos/News';
import { ProfileControllerComponent } from '../profile-controller/profile-controller.component';

@Component({
  selector: 'app-submissions-view',
  templateUrl: './submissions-view.component.html',
  styleUrls: ['./submissions-view.component.css']
})
export class SubmissionsViewComponent implements OnInit {

  constructor(private profileControllerComponent:ProfileControllerComponent) { }
  news:News[] = [];
  ngOnInit(): void {
    this.getSubmissions()
  }

  private getSubmissions(){
    let username = localStorage.getItem("username") as string;
    this.profileControllerComponent.getSubmissions(username).then(data =>{
      this.news = data
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileControllerComponent } from '../profile-controller/profile-controller.component';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css'],
})
export class ProfileViewComponent implements OnInit {
  constructor(
    private profileControllerComponent: ProfileControllerComponent,
    private router: Router
  ) {}

  user: any;
  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    let username:string = localStorage.getItem("username") as string
    this.profileControllerComponent.getProfile(username).then((data) => {
      this.user = data;
    });
  }

  dataCorrectForm(maxvisit: string, minaway: string, delay: string) {
    return (
      !isNaN(Number(maxvisit)) &&
      !isNaN(Number(minaway)) &&
      !isNaN(Number(delay))
    );
  }

  aboutCorrectSize(about: string) {
    var regex = /\S/g;
    var length = about.split(regex).length - 1;
    return length < 255;
  }

  public getInfoUser() {
    let username = localStorage.getItem('username');
    var created = (document.getElementById('created') as HTMLInputElement)
      .value;
    var karma = (document.getElementById('karma') as HTMLInputElement).value;
    var maxvisit = (document.getElementById('maxvisit') as HTMLInputElement)
      .value;
    var minaway = (document.getElementById('minaway') as HTMLInputElement)
      .value;
    var delay = (document.getElementById('delay') as HTMLInputElement).value;
    var about = (document.getElementById('about') as HTMLInputElement).value;
    var showdead = (document.getElementById('showdead') as HTMLInputElement)
      .checked;
    var noprocrast = (document.getElementById('noprocrast') as HTMLInputElement)
      .checked;
    let request = {
      username: username,
      created: created,
      karma: karma,
      maxvisit: maxvisit,
      minaway: minaway,
      delay: delay,
      about: about,
      showdead: showdead,
      noprocrast: noprocrast,
      apiKey : localStorage.getItem("apiKey")
    };
    if (
      this.dataCorrectForm(maxvisit, minaway, delay) &&
      this.aboutCorrectSize(about)
    ) {
      this.profileControllerComponent.submit(request);
    } else alert('Max visit, Min away and delay must be numbers');
  }
  public getUserSubmissions() {
    this.router.navigate(['my-submissions']);
  }

  public getUserComments() {
    this.router.navigate(['comments']);
  }

  public getVotedSubmissions() {
    this.router.navigate(['votedSubmissions']);
  }

  public getVotedComments() {
    this.router.navigate(['votedComments']);
  }
}

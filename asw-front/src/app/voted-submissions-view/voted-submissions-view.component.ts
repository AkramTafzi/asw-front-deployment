import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '../modelos/News';
import { ProfileControllerComponent } from '../profile-controller/profile-controller.component';
@Component({
  selector: 'app-voted-submissions-view',
  templateUrl: './voted-submissions-view.component.html',
  styleUrls: ['./voted-submissions-view.component.css'],
})
export class VotedSubmissionsViewComponent implements OnInit {
  constructor(
    private profileControllerComponent: ProfileControllerComponent,
    private router: Router
  ) {}
  news: News[] = [];
  ngOnInit(): void {
    this.getLikedSubmissions();
  }

  public getLikedSubmissions() {
    let username = localStorage.getItem('username') as string;
    this.profileControllerComponent
      .getLikedSubmissions(username)
      .then((data) => {
        this.news = data;
      });
  }

  goToSubmission(id: string): void {
    localStorage.setItem('submission', id);
    this.router.navigate(['submission']);
  }
}

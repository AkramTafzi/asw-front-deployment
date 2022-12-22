import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '../modelos/News';
import { MySubmissionsControllerComponent } from '../my-submissions-controller/my-submissions-controller.component';

@Component({
  selector: 'app-my-submissios',
  templateUrl: './my-submissios.component.html',
  styleUrls: ['./my-submissios.component.css'],
})
export class MySubmissiosComponent implements OnInit {
  news: News[] = [];

  constructor(
    private mySubmissionsCtrl: MySubmissionsControllerComponent,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mySubmissionsCtrl.getMySubmissions().then((data) => {
      this.news = data;
    });
  }

  goToSubmission(id: string): void {
    localStorage.setItem('submission', id);
    this.router.navigate(['submission']);
  }
}

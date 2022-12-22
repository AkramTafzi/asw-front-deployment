import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeControllerComponent } from '../home-controller/home-controller.component';
import { News } from '../modelos/News';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  news: News[];

  constructor(
    private homeControllerComponent: HomeControllerComponent,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.homeControllerComponent.getNews().then((data) => {
      this.news = data;
    });
  }

  goToSubmission(id: string): void {
    localStorage.setItem('submission', id);
    this.router.navigate(['submission']);
  }
}

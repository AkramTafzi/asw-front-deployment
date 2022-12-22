import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '../modelos/News';
import { NewestControllerComponent } from '../newest-controller/newest-controller.component';

@Component({
  selector: 'app-newest-view',
  templateUrl: './newest-view.component.html',
  styleUrls: ['./newest-view.component.css'],
})
export class NewestViewComponent implements OnInit {
  news: News[] = [];

  constructor(
    private newestControllerComponent: NewestControllerComponent,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newestControllerComponent.getNewest().then((data) => {
      this.news = data;
    });
  }

  goToSubmission(id: string): void {
    localStorage.setItem('submission', id);
    this.router.navigate(['submission']);
  }
}

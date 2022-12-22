import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '../modelos/News';
import { ShowControllerComponent } from '../show-controller/show-controller.component';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  show: News[] = [];

  constructor(
    private showControllerComponent: ShowControllerComponent,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.showControllerComponent.getShow().then((data) => {
      this.show = data;
    });
  }

  goToSubmission(id: string): void {
    localStorage.setItem('submission', id);
    this.router.navigate(['submission']);
  }
}

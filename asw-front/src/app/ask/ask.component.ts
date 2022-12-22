import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AskControllerComponent } from '../ask-controller/ask-controller.component';
import { News } from '../modelos/News';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css'],
})
export class AskComponent implements OnInit {
  ask: News[];

  constructor(
    private askControllerComponent: AskControllerComponent,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.askControllerComponent.getAsk().then((data) => {
      this.ask = data;
    });
  }

  goToSubmission(id: string): void {
    localStorage.setItem('submission', id);
    this.router.navigate(['submission']);
  }
}

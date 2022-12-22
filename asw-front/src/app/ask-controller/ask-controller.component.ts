import { Component, OnInit } from '@angular/core';
import { AskService } from '../Ask-Service/ask.service';
import { News } from '../modelos/News';

@Component({
  selector: 'app-ask-controller',
  templateUrl: './ask-controller.component.html',
  styleUrls: ['./ask-controller.component.css'],
})
export class AskControllerComponent implements OnInit {
  constructor(private askService: AskService) {}

  ask: News[] = [];

  ngOnInit(): void {
    this.getAsk();
  }

  public async getAsk(): Promise<News[]> {
    this.ask = [];
    await this.askService.getAsk().then((data) => {
      this.ask = data;
    });
    return this.ask;
  }
}

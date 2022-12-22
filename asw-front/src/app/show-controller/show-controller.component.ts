import { Component, OnInit } from '@angular/core';
import { News } from '../modelos/News';
import { ShowService } from '../Show-Service/show.service';

@Component({
  selector: 'app-show-controller',
  templateUrl: './show-controller.component.html',
  styleUrls: ['./show-controller.component.css']
})
export class ShowControllerComponent implements OnInit {

  constructor(private showService: ShowService) { }
  
  ask : News[] = [];

  ngOnInit(): void {
    this.getShow();
  }

  public async getShow(): Promise<News[]> {
    this.ask = []
    await this.showService.getShow().then(data => {
      this.ask = data;
    })
    return this.ask;
  }

}

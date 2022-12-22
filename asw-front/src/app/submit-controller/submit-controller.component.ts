import { Component, OnInit } from '@angular/core';
import { SubmitService } from '../submit-service/submit.service';

@Component({
  selector: 'app-submit-controller',
  templateUrl: './submit-controller.component.html',
  styleUrls: ['./submit-controller.component.css']
})
export class SubmitControllerComponent implements OnInit {

  constructor(private submitService: SubmitService) { }

  ngOnInit(): void {
  }
  public submit(news: any): void{
    console.log("lol")
    this.submitService.submit(news);
  }

}

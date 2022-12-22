import { Component, OnInit } from '@angular/core';
import { Comments } from '../modelos/Comments';
import { ThreadsService } from '../threads-service/threads.service';

@Component({
  selector: 'app-threads-controller',
  templateUrl: './threads-controller.component.html',
  styleUrls: ['./threads-controller.component.css'],
})
export class ThreadsControllerComponent implements OnInit {
  constructor(private threadsService: ThreadsService) {}

  threads: Comments[] = [];

  ngOnInit(): void {
    this.getThreads();
  }

  public async getThreads(): Promise<Comments[]> {
    this.threads = [];
    await this.threadsService.getThreads().then((data) => {
      this.threads = data;
    });
    return this.threads;
  }
}

import { Component, OnInit } from '@angular/core';
import { SubmitControllerComponent } from '../submit-controller/submit-controller.component';
@Component({
  selector: 'app-submit-view',
  templateUrl: './submit-view.component.html',
  styleUrls: ['./submit-view.component.css'],
})
export class SubmitViewComponent implements OnInit {
  constructor(private submitControllerComponent: SubmitControllerComponent) {}

  ngOnInit(): void {}

  public submit() {
    let title: string = (document.getElementById('title') as HTMLInputElement)
      .value;
    let url: string | null = (
      document.getElementById('url') as HTMLInputElement
    ).value;
    let body: string = (document.getElementById('text') as HTMLInputElement)
      .value;
    let username = localStorage.getItem('username');
    if (url === '' || (url != '' && this.checkIsAUrl(url))) {
      let page = url.split('/')[2];
      var news = {
        title: title,
        page_: page,
        username: { username },
        link: url,
        text: body,
      };
      this.submitControllerComponent.submit(news);
    } else {
      url = null;
    }
  }

  private checkIsAUrl(link: string) {
    try {
      let url = new URL(link);
    } catch (e) {
      return false;
    }
    return true;
  }
}

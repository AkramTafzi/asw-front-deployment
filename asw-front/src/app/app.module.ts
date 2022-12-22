import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AskControllerComponent } from './ask-controller/ask-controller.component';
import { AskComponent } from './ask/ask.component';
import { CommentsViewComponent } from './comments-view/comments-view.component';
import { HomeControllerComponent } from './home-controller/home-controller.component';
import { HomeComponent } from './home/home.component';
import { MySubmissionsControllerComponent } from './my-submissions-controller/my-submissions-controller.component';
import { MySubmissiosComponent } from './my-submissios/my-submissios.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewestControllerComponent } from './newest-controller/newest-controller.component';
import { NewestViewComponent } from './newest-view/newest-view.component';
import { ProfileControllerComponent } from './profile-controller/profile-controller.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ReplyControllerComponent } from './reply-controller/reply-controller.component';
import { ReplyComponent } from './reply/reply.component';
import { ShowControllerComponent } from './show-controller/show-controller.component';
import { ShowComponent } from './show/show.component';
import { SubmissionControllerComponent } from './submission-controller/submission-controller.component';
import { SubmissionComponent } from './submission/submission.component';
import { SubmissionsViewComponent } from './submissions-view/submissions-view.component';
import { SubmitControllerComponent } from './submit-controller/submit-controller.component';
import { SubmitViewComponent } from './submit-view/submit-view.component';
import { ThreadsControllerComponent } from './threads-controller/threads-controller.component';
import { ThreadsComponent } from './threads/threads.component';
import { VotedCommentsViewComponent } from './voted-comments-view/voted-comments-view.component';
import { VotedSubmissionsViewComponent } from './voted-submissions-view/voted-submissions-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewestViewComponent,
    NewestControllerComponent,
    SubmitViewComponent,
    SubmitControllerComponent,
    ProfileViewComponent,
    ProfileControllerComponent,
    SubmissionsViewComponent,
    CommentsViewComponent,
    VotedSubmissionsViewComponent,
    VotedCommentsViewComponent,
    AskComponent,
    AskControllerComponent,
    ShowComponent,
    ShowControllerComponent,
    SubmissionComponent,
    SubmissionControllerComponent,
    ThreadsComponent,
    ThreadsControllerComponent,
    ReplyComponent,
    ReplyControllerComponent,
    HomeComponent,
    HomeControllerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    NewestControllerComponent,
    AskControllerComponent,
    SubmitControllerComponent,
    ShowControllerComponent,
    SubmissionControllerComponent,
    ThreadsControllerComponent,
    ReplyControllerComponent,
    ProfileControllerComponent,
    HomeControllerComponent,
    MySubmissionsControllerComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

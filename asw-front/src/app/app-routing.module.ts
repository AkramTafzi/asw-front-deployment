import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AskComponent } from './ask/ask.component';
import { CommentsViewComponent } from './comments-view/comments-view.component';
import { HomeComponent } from './home/home.component';
import { MySubmissiosComponent } from './my-submissios/my-submissios.component';
import { NewestViewComponent } from './newest-view/newest-view.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ReplyComponent } from './reply/reply.component';
import { ShowComponent } from './show/show.component';
import { SubmissionComponent } from './submission/submission.component';
import { SubmissionsViewComponent } from './submissions-view/submissions-view.component';
import { SubmitViewComponent } from './submit-view/submit-view.component';
import { ThreadsComponent } from './threads/threads.component';
import { VotedCommentsViewComponent } from './voted-comments-view/voted-comments-view.component';
import { VotedSubmissionsViewComponent } from './voted-submissions-view/voted-submissions-view.component';

const routes: Routes = [
  { path: 'view-newest', component: NewestViewComponent },
  { path: 'submit-view', component: SubmitViewComponent },
  { path: 'ask', component: AskComponent },
  { path: 'profile-view', component: ProfileViewComponent },
  { path: 'show', component: ShowComponent },
  { path: 'submission', component: SubmissionComponent },
  { path: 'threads', component: ThreadsComponent },
  { path: 'reply', component: ReplyComponent },
  { path: 'submissions', component: SubmissionsViewComponent },
  { path: 'comments', component: CommentsViewComponent },
  { path: 'votedSubmissions', component: VotedSubmissionsViewComponent },
  { path: 'threads', component: ThreadsComponent },
  { path: 'votedComments', component: VotedCommentsViewComponent },
  { path: 'sumbi', component: SubmissionComponent },
  { path: '', component: HomeComponent },
  { path: 'my-submissions', component: MySubmissiosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

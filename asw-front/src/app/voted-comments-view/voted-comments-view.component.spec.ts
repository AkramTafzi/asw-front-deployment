import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotedCommentsViewComponent } from './voted-comments-view.component';

describe('VotedCommentsViewComponent', () => {
  let component: VotedCommentsViewComponent;
  let fixture: ComponentFixture<VotedCommentsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotedCommentsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotedCommentsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotedSubmissionsViewComponent } from './voted-submissions-view.component';

describe('VotedSubmissionsViewComponent', () => {
  let component: VotedSubmissionsViewComponent;
  let fixture: ComponentFixture<VotedSubmissionsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotedSubmissionsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotedSubmissionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

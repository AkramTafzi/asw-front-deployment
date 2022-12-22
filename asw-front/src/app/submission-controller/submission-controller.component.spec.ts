import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionControllerComponent } from './submission-controller.component';

describe('SubmissionControllerComponent', () => {
  let component: SubmissionControllerComponent;
  let fixture: ComponentFixture<SubmissionControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmissionControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

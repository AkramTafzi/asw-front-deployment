import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitViewComponent } from './submit-view.component';

describe('SubmitViewComponent', () => {
  let component: SubmitViewComponent;
  let fixture: ComponentFixture<SubmitViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

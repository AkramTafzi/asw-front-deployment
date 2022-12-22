import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionsViewComponent } from './submissions-view.component';

describe('SubmissionsViewComponent', () => {
  let component: SubmissionsViewComponent;
  let fixture: ComponentFixture<SubmissionsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmissionsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadsControllerComponent } from './threads-controller.component';

describe('ThreadsControllerComponent', () => {
  let component: ThreadsControllerComponent;
  let fixture: ComponentFixture<ThreadsControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreadsControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadsControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

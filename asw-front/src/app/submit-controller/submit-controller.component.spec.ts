import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitControllerComponent } from './submit-controller.component';

describe('SubmitControllerComponent', () => {
  let component: SubmitControllerComponent;
  let fixture: ComponentFixture<SubmitControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

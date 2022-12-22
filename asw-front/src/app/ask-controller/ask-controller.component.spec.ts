import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskControllerComponent } from './ask-controller.component';

describe('AskControllerComponent', () => {
  let component: AskControllerComponent;
  let fixture: ComponentFixture<AskControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

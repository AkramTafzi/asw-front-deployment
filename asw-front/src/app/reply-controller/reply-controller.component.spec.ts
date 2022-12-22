import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyControllerComponent } from './reply-controller.component';

describe('ReplyControllerComponent', () => {
  let component: ReplyControllerComponent;
  let fixture: ComponentFixture<ReplyControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplyControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

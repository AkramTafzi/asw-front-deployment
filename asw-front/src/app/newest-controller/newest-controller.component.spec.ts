import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestControllerComponent } from './newest-controller.component';

describe('NewestControllerComponent', () => {
  let component: NewestControllerComponent;
  let fixture: ComponentFixture<NewestControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewestControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

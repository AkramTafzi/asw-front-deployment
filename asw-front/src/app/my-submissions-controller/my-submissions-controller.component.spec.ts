import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySubmissionsControllerComponent } from './my-submissions-controller.component';

describe('MySubmissionsControllerComponent', () => {
  let component: MySubmissionsControllerComponent;
  let fixture: ComponentFixture<MySubmissionsControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySubmissionsControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySubmissionsControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

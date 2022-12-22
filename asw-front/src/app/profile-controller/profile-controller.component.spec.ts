import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileControllerComponent } from './profile-controller.component';

describe('ProfileControllerComponent', () => {
  let component: ProfileControllerComponent;
  let fixture: ComponentFixture<ProfileControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

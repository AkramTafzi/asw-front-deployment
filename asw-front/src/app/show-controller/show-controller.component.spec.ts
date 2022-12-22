import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowControllerComponent } from './show-controller.component';

describe('ShowControllerComponent', () => {
  let component: ShowControllerComponent;
  let fixture: ComponentFixture<ShowControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

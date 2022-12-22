import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySubmissiosComponent } from './my-submissios.component';

describe('MySubmissiosComponent', () => {
  let component: MySubmissiosComponent;
  let fixture: ComponentFixture<MySubmissiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySubmissiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySubmissiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

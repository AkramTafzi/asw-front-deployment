import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestViewComponent } from './newest-view.component';

describe('NewestViewComponent', () => {
  let component: NewestViewComponent;
  let fixture: ComponentFixture<NewestViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewestViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

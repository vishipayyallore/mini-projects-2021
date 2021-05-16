import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCalendarComponent } from './show-calendar.component';

describe('ShowCalendarComponent', () => {
  let component: ShowCalendarComponent;
  let fixture: ComponentFixture<ShowCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

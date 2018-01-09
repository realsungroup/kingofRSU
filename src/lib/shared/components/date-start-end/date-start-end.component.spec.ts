import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateStartEndComponent } from './date-start-end.component';

describe('DateStartEndComponent', () => {
  let component: DateStartEndComponent;
  let fixture: ComponentFixture<DateStartEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateStartEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateStartEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

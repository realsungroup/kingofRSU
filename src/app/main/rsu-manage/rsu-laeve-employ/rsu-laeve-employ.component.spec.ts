import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsuLaeveEmployComponent } from './rsu-laeve-employ.component';

describe('RsuLaeveEmployComponent', () => {
  let component: RsuLaeveEmployComponent;
  let fixture: ComponentFixture<RsuLaeveEmployComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsuLaeveEmployComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsuLaeveEmployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

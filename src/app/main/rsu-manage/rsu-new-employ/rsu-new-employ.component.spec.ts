import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsuNewEmployComponent } from './rsu-new-employ.component';

describe('RsuNewEmployComponent', () => {
  let component: RsuNewEmployComponent;
  let fixture: ComponentFixture<RsuNewEmployComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsuNewEmployComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsuNewEmployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

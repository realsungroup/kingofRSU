import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsuMyDetailComponent } from './rsu-my-detail.component';

describe('RsuMyDetailComponent', () => {
  let component: RsuMyDetailComponent;
  let fixture: ComponentFixture<RsuMyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsuMyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsuMyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

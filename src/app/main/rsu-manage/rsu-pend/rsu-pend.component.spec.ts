import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsuPendComponent } from './rsu-pend.component';

describe('RsuPendComponent', () => {
  let component: RsuPendComponent;
  let fixture: ComponentFixture<RsuPendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsuPendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsuPendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

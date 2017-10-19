import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsuManageComponent } from './rsu-manage.component';

describe('RsuManageComponent', () => {
  let component: RsuManageComponent;
  let fixture: ComponentFixture<RsuManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsuManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsuManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

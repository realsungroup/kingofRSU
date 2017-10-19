import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffListExportComponent } from './staff-list-export.component';

describe('StaffListExportComponent', () => {
  let component: StaffListExportComponent;
  let fixture: ComponentFixture<StaffListExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffListExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffListExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

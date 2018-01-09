import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsuAccountListComponent } from './rsu-account-list.component';

describe('RsuAccountListComponent', () => {
  let component: RsuAccountListComponent;
  let fixture: ComponentFixture<RsuAccountListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsuAccountListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsuAccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

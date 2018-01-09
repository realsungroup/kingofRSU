import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryRsuListComponent } from './history-rsu-list.component';

describe('HistoryRsuListComponent', () => {
  let component: HistoryRsuListComponent;
  let fixture: ComponentFixture<HistoryRsuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryRsuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryRsuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

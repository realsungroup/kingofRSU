import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvDictionarySearchComponent } from './adv-dictionary-search.component';

describe('AdvDictionarySearchComponent', () => {
  let component: AdvDictionarySearchComponent;
  let fixture: ComponentFixture<AdvDictionarySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvDictionarySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvDictionarySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

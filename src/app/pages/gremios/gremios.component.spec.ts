import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GremiosComponent } from './gremios.component';

describe('GremiosComponent', () => {
  let component: GremiosComponent;
  let fixture: ComponentFixture<GremiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GremiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GremiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

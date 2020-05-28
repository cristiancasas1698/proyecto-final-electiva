import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorGremiosComponent } from './sector-gremios.component';

describe('SectorGremiosComponent', () => {
  let component: SectorGremiosComponent;
  let fixture: ComponentFixture<SectorGremiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorGremiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorGremiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

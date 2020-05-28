import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalHumanoComponent } from './capital-humano.component';

describe('CapitalHumanoComponent', () => {
  let component: CapitalHumanoComponent;
  let fixture: ComponentFixture<CapitalHumanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitalHumanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalHumanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

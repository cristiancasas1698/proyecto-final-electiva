import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalRelacionalComponent } from './capital-relacional.component';

describe('CapitalRelacionalComponent', () => {
  let component: CapitalRelacionalComponent;
  let fixture: ComponentFixture<CapitalRelacionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitalRelacionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalRelacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

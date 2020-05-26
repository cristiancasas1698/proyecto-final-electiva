import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversidadPrivadaComponent } from './universidad-privada.component';

describe('UniversidadPrivadaComponent', () => {
  let component: UniversidadPrivadaComponent;
  let fixture: ComponentFixture<UniversidadPrivadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversidadPrivadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversidadPrivadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

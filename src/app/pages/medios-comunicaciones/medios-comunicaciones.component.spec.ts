import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediosComunicacionesComponent } from './medios-comunicaciones.component';

describe('MediosComunicacionesComponent', () => {
  let component: MediosComunicacionesComponent;
  let fixture: ComponentFixture<MediosComunicacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediosComunicacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediosComunicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

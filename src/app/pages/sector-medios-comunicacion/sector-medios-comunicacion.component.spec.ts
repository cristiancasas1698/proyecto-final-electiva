import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorMediosComunicacionComponent } from './sector-medios-comunicacion.component';

describe('SectorMediosComunicacionComponent', () => {
  let component: SectorMediosComunicacionComponent;
  let fixture: ComponentFixture<SectorMediosComunicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorMediosComunicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorMediosComunicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

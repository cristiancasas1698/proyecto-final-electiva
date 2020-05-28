import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedioComunicacionComponent } from './medio-comunicacion.component';

describe('MedioComunicacionComponent', () => {
  let component: MedioComunicacionComponent;
  let fixture: ComponentFixture<MedioComunicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedioComunicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedioComunicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

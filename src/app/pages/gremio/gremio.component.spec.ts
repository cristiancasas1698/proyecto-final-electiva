import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GremioComponent } from './gremio.component';

describe('GremioComponent', () => {
  let component: GremioComponent;
  let fixture: ComponentFixture<GremioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GremioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GremioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

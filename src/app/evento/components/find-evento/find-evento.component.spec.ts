import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindEventoComponent } from './find-evento.component';

describe('FindEventoComponent', () => {
  let component: FindEventoComponent;
  let fixture: ComponentFixture<FindEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ConvertKm2miMi2kmComponent } from './convert-km2mi-mi2km.component';

describe('ConvertKm2miMi2kmComponent', () => {
  let component: ConvertKm2miMi2kmComponent;
  let fixture: ComponentFixture<ConvertKm2miMi2kmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertKm2miMi2kmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertKm2miMi2kmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

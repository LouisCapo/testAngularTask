/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RowInputComponent } from './row-input.component';

describe('RowInputComponent', () => {
  let component: RowInputComponent;
  let fixture: ComponentFixture<RowInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

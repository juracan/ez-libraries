import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEzH1Component } from './ngx-ez-h1.component';

describe('NgxEzH1Component', () => {
  let component: NgxEzH1Component;
  let fixture: ComponentFixture<NgxEzH1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxEzH1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxEzH1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

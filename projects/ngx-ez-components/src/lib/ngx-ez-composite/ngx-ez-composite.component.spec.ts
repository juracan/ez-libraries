import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEzCompositeComponent } from './ngx-ez-composite.component';

describe('NgxEzCompositeComponent', () => {
  let component: NgxEzCompositeComponent;
  let fixture: ComponentFixture<NgxEzCompositeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxEzCompositeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxEzCompositeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

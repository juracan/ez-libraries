import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzComponentsComponent } from './ez-components.component';

describe('EzComponentsComponent', () => {
  let component: EzComponentsComponent;
  let fixture: ComponentFixture<EzComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EzComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EzComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

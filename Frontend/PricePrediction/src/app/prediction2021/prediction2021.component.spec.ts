import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prediction2021Component } from './prediction2021.component';

describe('Prediction2021Component', () => {
  let component: Prediction2021Component;
  let fixture: ComponentFixture<Prediction2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prediction2021Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prediction2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

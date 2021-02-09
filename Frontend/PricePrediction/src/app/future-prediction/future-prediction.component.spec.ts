import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturePredictionComponent } from './future-prediction.component';

describe('FuturePredictionComponent', () => {
  let component: FuturePredictionComponent;
  let fixture: ComponentFixture<FuturePredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuturePredictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturePredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

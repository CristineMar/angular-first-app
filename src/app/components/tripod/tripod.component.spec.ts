import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripodComponent } from './tripod.component';

describe('TripodComponent', () => {
  let component: TripodComponent;
  let fixture: ComponentFixture<TripodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

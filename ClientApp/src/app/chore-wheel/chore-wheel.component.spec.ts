import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoreWheelComponent } from './chore-wheel.component';

describe('ChoreWheelComponent', () => {
  let component: ChoreWheelComponent;
  let fixture: ComponentFixture<ChoreWheelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoreWheelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoreWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

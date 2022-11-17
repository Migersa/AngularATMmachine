import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldepositsComponent } from './alldeposits.component';

describe('AlldepositsComponent', () => {
  let component: AlldepositsComponent;
  let fixture: ComponentFixture<AlldepositsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlldepositsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlldepositsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

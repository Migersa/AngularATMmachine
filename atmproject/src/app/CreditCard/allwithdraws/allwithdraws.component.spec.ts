import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllwithdrawsComponent } from './allwithdraws.component';

describe('AllwithdrawsComponent', () => {
  let component: AllwithdrawsComponent;
  let fixture: ComponentFixture<AllwithdrawsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllwithdrawsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllwithdrawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

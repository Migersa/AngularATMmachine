import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositanothercardComponent } from './depositanothercard.component';

describe('DepositanothercardComponent', () => {
  let component: DepositanothercardComponent;
  let fixture: ComponentFixture<DepositanothercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositanothercardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositanothercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

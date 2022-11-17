import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardCredencialsComponent } from './credit-card-credencials.component';

describe('CreditCardCredencialsComponent', () => {
  let component: CreditCardCredencialsComponent;
  let fixture: ComponentFixture<CreditCardCredencialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardCredencialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditCardCredencialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

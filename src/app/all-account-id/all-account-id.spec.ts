import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAccountId } from './all-account-id';

describe('AllAccountId', () => {
  let component: AllAccountId;
  let fixture: ComponentFixture<AllAccountId>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllAccountId]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAccountId);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

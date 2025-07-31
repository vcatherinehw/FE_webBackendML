import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRuleTriggered } from './top-rule-triggered';

describe('TopRuleTriggered', () => {
  let component: TopRuleTriggered;
  let fixture: ComponentFixture<TopRuleTriggered>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopRuleTriggered]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRuleTriggered);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

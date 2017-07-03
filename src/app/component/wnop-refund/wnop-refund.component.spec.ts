import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WnopRefundComponent } from './wnop-refund.component';

describe('WnopRefundComponent', () => {
  let component: WnopRefundComponent;
  let fixture: ComponentFixture<WnopRefundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WnopRefundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WnopRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

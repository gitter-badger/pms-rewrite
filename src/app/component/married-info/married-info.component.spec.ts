import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriedInfoComponent } from './married-info.component';

describe('MarriedInfoComponent', () => {
  let component: MarriedInfoComponent;
  let fixture: ComponentFixture<MarriedInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarriedInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarriedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

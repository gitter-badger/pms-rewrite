import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentInfoComponent } from './dependent-info.component';

describe('DependentInfoComponent', () => {
  let component: DependentInfoComponent;
  let fixture: ComponentFixture<DependentInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependentInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

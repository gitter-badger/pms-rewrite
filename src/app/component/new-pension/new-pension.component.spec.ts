import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPensionComponent } from './new-pension.component';

describe('NewPensionComponent', () => {
  let component: NewPensionComponent;
  let fixture: ComponentFixture<NewPensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationStatesComponent } from './application-states.component';

describe('ApplicationStatesComponent', () => {
  let component: ApplicationStatesComponent;
  let fixture: ComponentFixture<ApplicationStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

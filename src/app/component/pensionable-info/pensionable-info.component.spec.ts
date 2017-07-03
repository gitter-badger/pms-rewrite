import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionableInfoComponent } from './pensionable-info.component';

describe('PensionableInfoComponent', () => {
  let component: PensionableInfoComponent;
  let fixture: ComponentFixture<PensionableInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensionableInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionableInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

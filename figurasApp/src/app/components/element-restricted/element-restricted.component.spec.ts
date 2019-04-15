import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementRestrictedComponent } from './element-restricted.component';

describe('ElementRestrictedComponent', () => {
  let component: ElementRestrictedComponent;
  let fixture: ComponentFixture<ElementRestrictedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementRestrictedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementRestrictedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

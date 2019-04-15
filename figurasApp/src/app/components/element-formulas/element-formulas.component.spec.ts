import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementFormulasComponent } from './element-formulas.component';

describe('ElementFormulasComponent', () => {
  let component: ElementFormulasComponent;
  let fixture: ComponentFixture<ElementFormulasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementFormulasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementFormulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

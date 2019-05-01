import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementAdminComponent } from './element-admin.component';

describe('ElementAdminComponent', () => {
  let component: ElementAdminComponent;
  let fixture: ComponentFixture<ElementAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

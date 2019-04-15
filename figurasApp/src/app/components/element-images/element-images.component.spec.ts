import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementImagesComponent } from './element-images.component';

describe('ElementImagesComponent', () => {
  let component: ElementImagesComponent;
  let fixture: ComponentFixture<ElementImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

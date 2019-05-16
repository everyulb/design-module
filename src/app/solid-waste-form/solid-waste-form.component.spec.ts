import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidWasteFormComponent } from './solid-waste-form.component';

describe('SolidWasteFormComponent', () => {
  let component: SolidWasteFormComponent;
  let fixture: ComponentFixture<SolidWasteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolidWasteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolidWasteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

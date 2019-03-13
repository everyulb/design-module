import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCollectionFormComponent } from './data-collection-form.component';

describe('DataCollectionFormComponent', () => {
  let component: DataCollectionFormComponent;
  let fixture: ComponentFixture<DataCollectionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataCollectionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCollectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

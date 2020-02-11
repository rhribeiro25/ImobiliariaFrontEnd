import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLocatorComponent } from './table-locator.component';

describe('TableLocatorComponent', () => {
  let component: TableLocatorComponent;
  let fixture: ComponentFixture<TableLocatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableLocatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

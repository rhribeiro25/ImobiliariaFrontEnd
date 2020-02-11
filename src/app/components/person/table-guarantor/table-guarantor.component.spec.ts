import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGuarantorComponent } from './table-guarantor.component';

describe('TableGuarantorComponent', () => {
  let component: TableGuarantorComponent;
  let fixture: ComponentFixture<TableGuarantorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableGuarantorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableGuarantorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

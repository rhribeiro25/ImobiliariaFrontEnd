import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTenantComponent } from './table-tenant.component';

describe('TableTenantComponent', () => {
  let component: TableTenantComponent;
  let fixture: ComponentFixture<TableTenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

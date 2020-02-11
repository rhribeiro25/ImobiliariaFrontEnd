import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardContractComponent } from './wizard-contract.component';

describe('WizardContractComponent', () => {
  let component: WizardContractComponent;
  let fixture: ComponentFixture<WizardContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

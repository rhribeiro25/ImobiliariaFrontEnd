import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddEditPersonComponent } from './components/person/add-edit-person/add-edit-person.component';
import { AddEditPropertyComponent } from './components/property/add-edit-property/add-edit-property.component';
import { ListPeopleComponent } from './components/person/list-people/list-people.component';
import { ListPropertiesComponent } from './components/property/list-properties/list-properties.component';
import { ListContractsComponent } from './components/contract/list-contracts/list-contracts.component';
import { AddEditContractComponent } from './components/contract/add-edit-contract/add-edit-contract.component';
import { WizardContractComponent } from './components/contract/wizard-contract/wizard-contract.component';
import { TableGuarantorComponent } from './components/person/table-guarantor/table-guarantor.component';
import { TableTenantComponent } from './components/person/table-tenant/table-tenant.component';
import { TableLocatorComponent } from './components/person/table-locator/table-locator.component';

const appRoutes: Routes = [
  { path: 'wizard-contract', component: WizardContractComponent},
  { path: 'list-contracts', component: ListContractsComponent},
  { path: 'add-edit-contract', component: AddEditContractComponent},

  { path: 'list-people', component: ListPeopleComponent},
  { path: 'add-edit-person', component: AddEditPersonComponent},

  { path: 'list-properties', component: ListPropertiesComponent},
  { path: 'add-edit-people', component: AddEditPropertyComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WizardContractComponent,
    AddEditPropertyComponent,
    AddEditPersonComponent,
    AddEditContractComponent,
    ListPeopleComponent,
    ListPropertiesComponent,
    ListContractsComponent,
    TableGuarantorComponent,
    TableTenantComponent,
    TableLocatorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

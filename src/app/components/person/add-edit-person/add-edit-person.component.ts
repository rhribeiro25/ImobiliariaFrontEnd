import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, NgForm, FormBuilder } from '@angular/forms';
import { Person } from 'src/app/models/person';
import { Contract } from 'src/app/models/contract';
import { Subject } from 'rxjs';
import { PersonService } from 'src/app/services/person.service';
import { ContractService } from 'src/app/services/contract.service';
import { MatSnackBar } from '@angular/material';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-add-edit-person',
  templateUrl: './add-edit-person.component.html',
  styleUrls: ['./add-edit-person.component.css']
})
export class AddEditPersonComponent implements OnInit {

  personForm: FormGroup = this.fb.group({
    _id: [null],
    type: ['', [Validators.required]],
    firstName: ['', [Validators.required, Validators.maxLength(63)]],
    lastName: ['', [Validators.required, Validators.maxLength(63)]],
    birthday: ['', [Validators.required]],
    motherName: ['', [Validators.required, Validators.maxLength(127)]],
    fatherName: ['', [Validators.required, Validators.maxLength(127)]],
    email: ['', [Validators.required, Validators.maxLength(127)]],

    rg: ['', [Validators.required, Validators.maxLength(63)]],
    cpf: ['', [Validators.required, Validators.maxLength(63)]],

    cep: ['', [Validators.required, Validators.maxLength(127)]],
    street: ['', [Validators.required, Validators.maxLength(127)]],
    number: ['', [Validators.required, Validators.maxLength(127)]],
    complement: ['', [Validators.required, Validators.maxLength(127)]],
    neighborhood: ['', [Validators.required, Validators.maxLength(127)]],
    city: ['', [Validators.required, Validators.maxLength(127)]],
    state: ['', [Validators.required, Validators.maxLength(127)]],

    phone: ['', [Validators.required, Validators.maxLength(127)]],
    cell: ['', [Validators.required, Validators.maxLength(127)]],

    // documents: [[], [Validators.required]],
    // addresses: [[], [Validators.required]],
    // phoneNumbers: [[], [Validators.required]],
  });

  @ViewChild('form') form: NgForm;

  people: Person[] = [];
  contracts: Contract[] = [];

  private unsubscribe$: Subject<any> = new Subject<any>();

  constructor(
    private personService: PersonService,
    private fb: FormBuilder,
    private contractService: ContractService,
    private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.personService.get()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((ps) => this.people = ps);
    /*this.contractService.get()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((cs) => this.contracts = cs);*/
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
  }

  save(){
    let data = this.personForm.value;
    if (data._id != null) {
      this.personService.update(data)
        .subscribe(
          (p)=> this.notify("Updated!")
        );
    }
    else {
      this.personService.add(data)
        .subscribe(
          (p) => this.notify("Inserted!!")
        );
    }
    this.resetForm();
  }

  delete(p: Person) {
    this.personService.del(p)
      .subscribe(
        () => this.notify("Deleted!"),
        (err) => console.log(err)
      )
  }

  edit(p: Person) {
    this.personService.update(p);
  }

  notify(msg: string) {
    this.snackbar.open(msg, "OK", {duration: 3000});
  }

  resetForm() {
    this.form.resetForm();
  }

}

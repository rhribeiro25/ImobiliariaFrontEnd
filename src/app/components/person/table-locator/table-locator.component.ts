import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { PersonService } from '../../../services/person.service';
import { Person } from '../../../models/person';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-table-locator',
  templateUrl: './table-locator.component.html',
  styleUrls: ['./table-locator.component.css']
})
export class TableLocatorComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  person: Person;
  personEdited: Person = null;
  people: Person[] = [];
  displayedColumns: string[] = ['name', 'phone', 'cell', 'email', 'actions'];
  dataSource = new MatTableDataSource<Person>(this.people);
  private unsubscribe$: Subject<any> = new Subject();


  constructor(
    private personService: PersonService,
    private snackBar: MatSnackBar
    ) {}
  
  ngOnInit() {
    this.personService.get()
    .pipe( takeUntil(this.unsubscribe$))
    .subscribe((ps) => this.people = ps);
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(){
    this.unsubscribe$.next();
  }

  save(){
    if(this.personEdited){
      this.personService.update(this.personEdited)
      .subscribe(
        (p) => {
          this.notify("Pessoa atualizada com sucesso!")
        },
        (err) => {
          this.notify("Falha ao atualizar pessoa!"),
          console.log(err)
        }
      );
    }else{
      this.personService.add(this.person)
      .subscribe(
        (p) => {
          console.log(p);
          this.clearFields();
          this.notify("Pessoa inserida com sucesso!")
        },
        (err) => {
          this.notify("Falha ao salvar pessoa!"),
          console.log(err)
        }
      );
    }
  }

  edit(p: Person){
    this.personEdited = p;
  }
  
  delete(p: Person){
    this.personService.del(p)
    .subscribe(
      () => this.notify("Pessoa deletada com sucesso!"),
      (err) => console.log(err)
    );
  }

  cancel(){

  }

  clearFields(){
    this.person = null;
  }

  notify(msg: string){
    this.snackBar.open(msg, "OK", {duration: 3000});
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

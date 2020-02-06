import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Person } from '../model/person';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  readonly url = 'http://localhost:3000/people';

  private peopleSubjects: BehaviorSubject<Person[]> = new BehaviorSubject<Person[]>(null);
  private loaded: boolean = false;

  constructor(private http: HttpClient) { }

  get(): Observable<Person[]> {
    if(!this.loaded){
      this.http.get<Person[]>(this.url)
      .pipe( tap((p) => console.log(p)))
      .subscribe(this.peopleSubjects);
    }
    return this.peopleSubjects.asObservable();
  }

  add(p: Person): Observable<Person> {
    return this.http.post<Person>(this.url, p)
    .pipe((tap((p: Person) => this.peopleSubjects.getValue().push(p))));
  }

  del(p: Person): Observable<any>{
    return this.http.delete(`${this.url}/${p._id}`)
    .pipe(tap(() => {
      let people = this.peopleSubjects.getValue();
      let i = people.findIndex(pe => pe._id === p._id);
      if(i >= 0)
        people.slice(i, 1);
    }));
  }

  update(p: Person): Observable<Person>{
    return this.http.patch<Person>(`${this.url}/${p._id}`, p)
    .pipe(tap((pe) => {
      let people = this.peopleSubjects.getValue();
      let i = people.findIndex(pe => pe._id === p._id);
      if(i >= 0)
        people[i].type = pe.type;
        people[i].firstName = pe.firstName;
        people[i].lastName = pe.lastName;
        people[i].birthday = pe.birthday;
        people[i].motherName = pe.motherName;
        people[i].fatherName = pe.fatherName;
    }))
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  readonly url = 'http://localhost:3000/people';

  constructor(private http: HttpClient) { }

  get(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url);
  }

  add(p: Person): Observable<Person> {
    return this.http.post<Person>(this.url, p);
  }
}

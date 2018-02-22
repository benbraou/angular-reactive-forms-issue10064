import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import { delay, map, tap } from 'rxjs/operators';

@Injectable()
export class ProfessionService {
  constructor(private http: Http) {}

  checkProfessionInKnown(name: string): Observable<boolean> {
    return this.http
      .get('assets/professions.json')
      .pipe(
        delay(2000),
        map(res => res.json()),
        map((professions: any[]) => professions.filter(profession => profession.label === name)),
        map((professions: any[]) => professions.length > 0)
      );
  }
}

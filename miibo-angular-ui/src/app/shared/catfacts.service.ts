import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatFact } from './CatFact.interface';

@Injectable({
  providedIn: 'root',
})
export class CatfactsService {
  constructor(private http: HttpClient) {}

  getCatFact(): Observable<CatFact> {
    return this.http.get<CatFact>('https://catfact.ninja/fact');
  }
}

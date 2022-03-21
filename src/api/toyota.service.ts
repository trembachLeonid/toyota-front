import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import api from './ApiConfig';
import { ToyotaModel } from 'src/models/toyota-model';

const headers = new HttpHeaders()
            .set("Content-Type", "application/json; charset=UTF-8")
            .set("X-Requested-With", "XMLHttpRequest");

@Injectable()
export class ToyotaService {
  constructor(private http: HttpClient) { }

  getToyotas(): Observable<ToyotaModel[]> {
      return this.http.get<ToyotaModel[]>(api.route);
  }

  getToyotasByColor(id: number) {
      return this.http.get<ToyotaModel[]>(api.route + "/color/" + id, { headers });
  }
  
  addToyota(toyota: ToyotaModel): Observable<ToyotaModel>{
      return this.http.post<ToyotaModel>(api.route + "/add", toyota, { headers });
  }
  
}
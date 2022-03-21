import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import api from './ApiConfig';
import { ColorModel } from 'src/models/color-model';

const headers = new HttpHeaders()
            .set("Content-Type", "application/json; charset=UTF-8")
            .set("X-Requested-With", "XMLHttpRequest");

@Injectable()
export class ColorService {
  constructor(private http: HttpClient) { }

  getColors(): Observable<ColorModel[]> {
      return this.http.get<ColorModel[]>(api.route + "/color", { headers });
  }
  
}
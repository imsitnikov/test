import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export class Data {
  name: string;
  isWork: boolean;
  isError: boolean;
  lastStartDate: string;
  lastErrorDate: string;
  lastErrorMessage: string;
}
   
@Injectable()
export class Service {
    constructor(private http: HttpClient) {}
       
    getData(): Observable<Data[]> {
      return this.http.get(`${environment.apiUrl}/services`).pipe(map(res => {
        return res['data'];
      }));
    }
}

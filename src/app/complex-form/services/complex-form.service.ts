import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, mapTo, delay, catchError, of } from "rxjs";
import { ComplexFormValue } from "../models/complex-form-value.model";

@Injectable()
export class ComplexFormService {
  constructor(private http: HttpClient) {}
    apiUrl = 'http://localhost:3000'
  saveUserInfo(formValue: ComplexFormValue): Observable<boolean> {
    return this.http.post(`${this.apiUrl}/users`, formValue).pipe(
      mapTo(true),
      delay(1000),
      catchError(() => of(false).pipe(
        delay(1000)
      ))
    );
  }
}
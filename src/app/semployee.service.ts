import { Injectable } from '@angular/core';
import { IEmployee } from './iemployee';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SEmployeeService {

  // url for fake api: https://my-json-server.typicode.com/arbermaleku/AdminLTE/employees
  private employeeApiUrl = 'https://my-json-server.typicode.com/arbermarleku/AdminLTE/employees';

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.employeeApiUrl).pipe(
      catchError(this.handleError)
    );
  }
  addEmployees (newEmployee: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(this.employeeApiUrl, newEmployee)
      .pipe(
        catchError(this.handleError)
      );
  }
  deleteEmployee (id: Number): Observable<{}> {
    const url = `${this.employeeApiUrl}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url, {observe: 'response'})
      .pipe(
        catchError(this.handleError)
      );
  }
  updateEmployee(currEmployee: IEmployee): Observable<IEmployee> {
    return this.http.put<IEmployee>(this.employeeApiUrl + '/' + currEmployee.id, currEmployee)
    .pipe(
      catchError(this.handleError)
    );
  }

  constructor(private http: HttpClient) {}

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error acured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, and error message is: ${err.error.message}`;
    }
    return throwError(errorMessage);
  }
}

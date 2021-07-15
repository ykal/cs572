import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ApiService<T> {
  private readonly  API_URL = "http://localhost:5059/api";
  constructor(private httpClient: HttpClient) { }

   get(resourceUrl: string): Observable<Object> {
    return  this.httpClient.get(`${this.API_URL}/${resourceUrl}`)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  post(resourceUrl: string, data: T): Observable<Object> {
    return  this.httpClient.post(`${this.API_URL}/${resourceUrl}`, data);
  }

  put(resourceUrl: string, data: T): Observable<Object> {
    return  this.httpClient.put(`${this.API_URL}/${resourceUrl}`, data);
  }

  delete(resourceUrl: string, id: string): Observable<Object> {
    return this.httpClient.delete(`${this.API_URL}/${resourceUrl}/${id}`);
  }

  handleError(error: any) {
    let errorMessage = "" ;
    if(error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\n Message: ${error.message}`
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  
}
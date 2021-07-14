import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ApiService<T> {
  private readonly  API_URL = "http://localhost:5050/api";
  constructor(private httpClient: HttpClient) { }

   getAll(resourceUrl: string): Promise<T[]> {
    return  this.httpClient.get(`${this.API_URL}/${resourceUrl}`)
    .toPromise()
    .then(res => <T[]>res);
  }

  create(resourceUrl: string, game: T): Promise<T> {
    return  this.httpClient.post(`${this.API_URL}/${resourceUrl}`, game)
    .toPromise()
    .then(res => <T>res);
  }

  getOneById(resourceUrl: string, gameId: string): Promise<T> {
    return this.httpClient.get(`${this.API_URL}/${resourceUrl}/${gameId}`)
    .toPromise()
    .then(res => <T>res);
  }

  removeOneById(resourceUrl: string, gameId: string): Promise<any> {
    return this.httpClient.get(`${this.API_URL}/${resourceUrl}/${gameId}`)
    .toPromise()
    .then(res => res);
  }
  
}
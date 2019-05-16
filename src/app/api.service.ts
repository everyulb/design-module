import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


let headers: HttpHeaders = new HttpHeaders();
  headers = headers.append('Accept', 'application/json');
  
@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient) { }

  api = 'https://demo-api.everyulb.com/api/v2';

  public post(url, body) {
    return this.http.post(`${this.api}/${url}`, body, {headers});
  }

  public get(url) {
    return this.http.get(`${this.api}/${url}`, {headers});
  }

  public put(url, body) {
    return this.http.put(`${this.api}/${url}`, body, {headers});
  }

  public delete(url) {
    return this.http.delete(`${this.api}/${url}`, {headers});
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    baseURL = `http://localhost:8080/alticci`;

    constructor(private http: HttpClient) { }

    getAlticci(n: number): Observable<number[]> {

        return this.http.get<number[]>(`${this.baseURL}/${n}`);
    }
}

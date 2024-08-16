import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RentRulesModel } from 'app/models/rent-rules.model';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
    constructor(private http: HttpClient) { }

    private httpOptions(): { headers: HttpHeaders } {
        return {
            headers: new HttpHeaders({
                Authorization: `Bearer ${localStorage.getItem('token') || ''}`
            })
        };
    }

    createUser(rentrule: RentRulesModel): Observable<any> {
        return this.http.post('/gateway/api/s2/rentrules/create-rule', rentrule, this.httpOptions());
    }

    getAllUsers(): Observable<any> {
        return this.http.get('/gateway/api/s2/rentrules/getAll-rules', this.httpOptions());
    }

    getUserByID(id: number): Observable<any> {
        return this.http.get(`/gateway/api/s2/rentrules/getRule/${id}`, this.httpOptions());
    }

    updateUser(rentrule: RentRulesModel, id: number): Observable<any> {
        return this.http.put(`/gateway/api/s2/rentrules/updateRule/${id}`, rentrule, this.httpOptions());
    }

    deleteUser(id: number): Observable<any> {
        return this.http.delete(`/gateway/api/s2/rentrules/deleteRule/${id}`, this.httpOptions());
    }
    
}
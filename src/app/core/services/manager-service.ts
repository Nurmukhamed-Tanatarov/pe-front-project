import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ManagerModel } from 'app/models/manager.model';
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

    createUser(manager: ManagerModel): Observable<any> {
        return this.http.post('/gateway/api/s2/manager/create', manager, this.httpOptions());
    }

    getAllUsers(): Observable<any> {
        return this.http.get('/gateway/api/s2/manager/getAll', this.httpOptions());
    }

    getUserByID(id: number): Observable<any> {
        return this.http.get(`/gateway/api/s2/manager/get/${id}`, this.httpOptions());
    }

    updateUser(manager: ManagerModel, id: number): Observable<any> {
        return this.http.put(`/gateway/api/s2/manager/update/${id}`, manager, this.httpOptions());
    }

    deleteUser(id: number): Observable<any> {
        return this.http.delete(`/gateway/api/s2/manager/delete/${id}`, this.httpOptions());
    }
}
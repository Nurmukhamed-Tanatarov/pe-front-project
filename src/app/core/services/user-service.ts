import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from 'app/models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(protected http: HttpClient) {}

    private httpOptions(): { headers: HttpHeaders } {
        return {
            headers: new HttpHeaders({
                Authorization: `Bearer ${localStorage.getItem('token') || ''}`
            })
        };
    }

    createUser(user: UserModel): Observable<any> {
        return this.http.post('/gateway/api/s4/users/createUser', user, this.httpOptions());
    }

    getAllUsers(): Observable<any> {
        return this.http.get('/gateway/api/s4/users/getAllUsers', this.httpOptions());
    }

    getUserByID(id: number): Observable<any> {
        return this.http.get(`/gateway/api/s4/users/getUser/${id}`, this.httpOptions());
    }

    updateUser(user: UserModel, id: number): Observable<any> {
        return this.http.put(`/gateway/api/s4/users/updateUser/${id}`, user, this.httpOptions());
    }

    deleteUser(id: number): Observable<any> {
        return this.http.delete(`/gateway/api/s4/users/deleteUser/${id}`, this.httpOptions());
    }
}

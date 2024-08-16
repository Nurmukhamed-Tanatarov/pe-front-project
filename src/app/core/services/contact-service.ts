import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContactModel } from 'app/models/contact.model';
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

    createUser(contact: ContactModel): Observable<any> {
        return this.http.post('/gateway/api/s2/contacts/addContact', contact, this.httpOptions());
    }

    getAllUsers(): Observable<any> {
        return this.http.get('/gateway/api/s2/contacts/getAllContacts', this.httpOptions());
    }

    getUserByID(id: number): Observable<any> {
        return this.http.get(`/gateway/api/s2/contacts/getContactByID/${id}`, this.httpOptions());
    }

    updateUser(contact: ContactModel, id: number): Observable<any> {
        return this.http.put(`/gateway/api/s2/contacts/updateContact/${id}`, contact, this.httpOptions());
    }

    deleteUser(id: number): Observable<any> {
        return this.http.delete(`/gateway/api/s2/contacts/deleteContact/${id}`, this.httpOptions());
    }
}
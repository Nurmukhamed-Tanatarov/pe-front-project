import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslationModel } from 'app/models/translation.model';

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

    createUser(translation: TranslationModel): Observable<any> {
        return this.http.post('/gateway/api/s2/translation/add-translation', translation, this.httpOptions());
    }

    getAllUsers(): Observable<any> {
        return this.http.get('/gateway/api/s2/translation/findAllTranslations', this.httpOptions());
    }

    getUserByID(id: number): Observable<any> {
        return this.http.get(`/gateway/api/s2/translation/findTranslationByID/${id}`, this.httpOptions());
    }

    updateUser(translation: TranslationModel, id: number): Observable<any> {
        return this.http.put(`/gateway/api/s2/translation/updateTranslations/${id}`, translation, this.httpOptions());
    }

    deleteUser(id: number): Observable<any> {
        return this.http.delete(`/gateway/api/s2/translation/delete-translation/${id}`, this.httpOptions());
    }
    
}
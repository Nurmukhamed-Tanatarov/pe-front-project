import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ManagerImagesModel } from 'app/models/manager-images.model';
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

    createUser(mimage: ManagerImagesModel): Observable<any> {
        return this.http.post('/gateway/api/s2/MImage/addImage', mimage, this.httpOptions());
    }

    getAllUsers(): Observable<any> {
        return this.http.get('/gateway/api/s2/MImage/getAllImage', this.httpOptions());
    }

    getUserByID(id: number): Observable<any> {
        return this.http.get(`/gateway/api/s2/MImage/getImageByID/${id}`, this.httpOptions());
    }

    updateUser(mimage: ManagerImagesModel, id: number): Observable<any> {
        return this.http.put(`/gateway/api/s2/MImage/updateMImage/${id}`, mimage, this.httpOptions());
    }

    deleteUser(id: number): Observable<any> {
        return this.http.delete(`/gateway/api/s2/MImage/deleteMImage/${id}`, this.httpOptions());
    }
}
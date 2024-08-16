import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GameImagesModel } from 'app/models/game-images.model';
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

    createUser(gameImage: GameImagesModel): Observable<any> {
        return this.http.post('/gateway/api/s3/gimage/addImage', gameImage, this.httpOptions());
    }

    getAllUsers(): Observable<any> {
        return this.http.get('/gateway/api/s3/gimage/getAllImage', this.httpOptions());
    }

    getUserByID(id: number): Observable<any> {
        return this.http.get(`/gateway/api/s3/gimage/getImageByID/${id}`, this.httpOptions());
    }

    updateUser(gameImage: GameImagesModel, id: number): Observable<any> {
        return this.http.put(`/gateway/api/s3/gimage/updateImage/${id}`, gameImage, this.httpOptions());
    }

    deleteUser(id: number): Observable<any> {
        return this.http.delete(`/gateway/api/s3/gimage/deleteImage/${id}`, this.httpOptions());
    }

}
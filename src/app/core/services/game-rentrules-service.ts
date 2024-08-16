import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GameREntRulesModel } from 'app/models/game-rentrules.model';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GameRentRules {

    constructor(private http: HttpClient) { }
    
    private httpOptions(): { headers: HttpHeaders } {
        return {
            headers: new HttpHeaders({
                Authorization: `Bearer ${localStorage.getItem('token') || ''}`
            })
        };
    }

    createUser(gameRR: GameREntRulesModel): Observable<any> {
        return this.http.post('/gateway/api/s3/gameRR/create-gameRR', gameRR, this.httpOptions());
    }

    getAllUsers(): Observable<any> {
        return this.http.get('/gateway/api/s3/gameRR/getAllGameRR', this.httpOptions());
    }

    getUserByID(id: number): Observable<any> {
        return this.http.get(`/gateway/api/s3/gameRR/getGameRR/${id}`, this.httpOptions());
    }

    updateUser(gameRR: GameREntRulesModel, id: number): Observable<any> {
        return this.http.put(`/gateway/api/s3/gameRR/updateGameRR/${id}`, gameRR, this.httpOptions());
    }

    deleteUser(id: number): Observable<any> {
        return this.http.delete(`/gateway/api/s3/gameRR/deleteGameRR/${id}`, this.httpOptions());
    }
}
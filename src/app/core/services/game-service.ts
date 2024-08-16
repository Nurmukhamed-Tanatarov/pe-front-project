import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GameModel } from 'app/models/game.model';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GameService {
    constructor(private http: HttpClient) { }

    private httpOptions(): {headers: HttpHeaders} {
        return {
            headers: new HttpHeaders({
                Authorization: `Bearer ${localStorage.getItem('token') || ''}`
            })
        }
    }
    
    createGame(game: GameModel): Observable<any> {
        return this.http.post('/gateway/api/s3/game/create-game', game, this.httpOptions());
    }

    getAllgames(): Observable<any> {
        return this.http.get('/gateway/api/s3/game/getAllGames', this.httpOptions());
    }

    getGameByID(id: number): Observable<any> {
        return this.http.get(`/gateway/api/s3/game/getGame/${id}`, this.httpOptions());
    }

    updateGame(game: GameModel, id: number): Observable<any> {
        return this.http.put(`/gateway/api/s3/game/updateGame/${id}`, game, this.httpOptions());
    }

    deleteGame(id: number): Observable<any> {
        return this.http.delete(`/gateway/api/s3/game/deleteGame/${id}`, this.httpOptions());
    }
}
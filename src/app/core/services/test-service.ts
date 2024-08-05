import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { UserModel } from "app/models/user.model";

@Injectable({ providedIn: 'root' })
export class TestService {

    constructor(protected http: HttpClient) {
    }

    private httpOptions(): HttpHeaders {
        return new HttpHeaders({
            Authorization: localStorage.getItem('token')
        });
    }

    testPost(testString: UserModel): Observable<any> {
        return this.http.post('/gateway/api/s4/users/createUser', testString, {headers: this.httpOptions()});
    }

    testGet(): Observable<any> {
        return this.http.get('/gateway/api/s4/users/getAllUsers', {headers: this.httpOptions()});
    }

}

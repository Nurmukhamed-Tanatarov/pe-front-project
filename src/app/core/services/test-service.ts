import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class TestService {

    constructor(protected http: HttpClient) {
    }

    private httpOptions(): HttpHeaders {
        return new HttpHeaders({
            Authorization: localStorage.getItem('token')
        });
    }

    testPost(testString: String): Observable<any> {
        return this.http.post('/gateway/administration/create', testString, {headers: this.httpOptions()});
    }

    testGet(): Observable<any> {
        return this.http.get('/gateway/administration/create', {headers: this.httpOptions()});
    }

}

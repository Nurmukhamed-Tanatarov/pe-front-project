import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CategoryModel } from "app/models/category.model";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class CategoryService{

    constructor(protected http: HttpClient) {}

    private httpOptions(): {headers: HttpHeaders} {
        return {
            headers: new HttpHeaders({
                Authorization: `Bearer ${localStorage.getItem('token') || ''}`
            })
        }
    }

    createCategory(category: CategoryModel): Observable<any>{
        return this.http.post('/gateway/api/s3/category/create-category', category, this.httpOptions());
    }

    getAllCategories(): Observable<any> {
        return this.http.get('/gateway/api/s3/category/getAllCategory', this.httpOptions());
    }

    getCategoryByID(id: number): Observable<any> {
        return this.http.get(`/gateway/api/s3/category/getCategoryByID/${id}`, this.httpOptions());
    }

    updateCategory(category: CategoryModel, id: number): Observable<any> {
        return this.http.put(`/gateway/api/s3/category/updateCategory/${id}`, category, this.httpOptions());
    }

    deleteCategory(id: number): Observable<any> {
        return this.http.delete(`/gateway/api/s3/category/deleteCategory/${id}`, this.httpOptions());
    }

}
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class DataService {
    constructor(private http: HttpClient) {
    }
    nonAuthPost(url: string, data: any) {
        return this.http.post(url, data);
    }
    authPost(url: string, data: any) {
        let token = '';
        token = localStorage.getItem("token") || '';
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: token
            })
        };
        return this.http.post(url, data, httpOptions);
    }
    nonAuthGet(url: string) {
        return this.http.get(url);
    }
    authGet(url: string) {
        let token = '';
        token = localStorage.getItem("token") || '';

        // let headers= new HttpHeaders();
        // headers.append("authorization",token);
        //    let options ={
        //        "authorization":token
        //    }
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: token
            })
        };
        return this.http.get(url, httpOptions);
    }
}
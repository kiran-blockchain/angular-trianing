import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { Observable, Subject } from "rxjs";
import { observableToBeFn } from "rxjs/internal/testing/TestScheduler";
@Injectable()
export class DataService {
    private navItems: any;
    private countries: any;
    public userDetails:any;
    CartInfo:Subject<any>;
    constructor(private http:HttpClient) {
        this.CartInfo = new Subject<any>();
        this.navItems = [{ key: 1, name: "Home" },
        { key: 2, name: "Sports" },
        { key: 3, name: "Electronics" }];

        this.countries = [{
            name: "India",
            alpha2Code: "IN"
        },
        {
            name: "United States",
            alpha2Code: "USA"
        }
        ];
        this.userDetails={
            email: "",
            firstName: "",
            lastName: "",
            gender: "",
            country: "IN",
            agreeTerms: true
        };
    }
    updateCart(item:any){
        this.CartInfo.next(item);
    }

    fetchCartInfo():Observable<any>{
        return this.CartInfo.asObservable();
    }
   
    getNavItems() {
        return this.navItems;
    }
    getCountries() {
        return this.countries;
    }
    setUserDetails(data:any){
        this.userDetails = data;
    }
    getUserDetails(){
        return this.userDetails;
    }
    getCountriesFromApi(){
        let endPoint  = 'https://restcountries.com/v2/all';
        //return this.http.get(endPoint).toPromise();
        return this.http.get(endPoint);
    }
    getProductsFromApi(endPoint:string){
       return this.http.get(endPoint);
    }
    cartData:any;
    addDataToCart(data:any){
        this.cartData=data;
    }
    getCartData(){
        return this.cartData;
    }
}
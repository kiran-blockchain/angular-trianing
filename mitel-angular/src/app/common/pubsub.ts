import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class PublisherService{
    private search:Subject<any>;
    constructor(){
        this.search= new Subject<any>();
    }

    searchProject(data:any){
        this.search.next(data);
    }

    getKeyWord(){
        return this.search.asObservable();
    }

}
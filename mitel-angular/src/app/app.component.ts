import { Component } from '@angular/core';

import {interval} from 'rxjs';
import {take,map} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flipkart';
  numbers:any;
  constructor(){
    //this.numbers = interval(1000);
    
    //numbers example
    // this.numbers.subscribe((value:any)=>{
    //   console.log("susbcriber:"+value)
    // })
    //this.exampleForTake();
    //this.exampleMap();

  }
  exampleForTake(){
    const takeThree = this.numbers.pipe(take(3));
    takeThree.subscribe((value:any)=>{
      console.log("Take susbcriber:"+value)
    })
  }
  exampleMap(){
  //  const mapThree= this.numbers.pipe(
  //     take(3),
  //     map((v:any)=>v+10)
  //   );
  const mapThree = this.numbers.pipe(map((v:any)=>v+10));
    mapThree.subscribe((value:any)=>{
      console.log("Map susbcriber:"+value)
    })
  }
}

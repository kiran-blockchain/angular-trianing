import { Component, NgZone } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:`<h1>Hello i am the template</h1>

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ekart';
  time = new Date();
  constructor(private zone: NgZone) {
    this.runOutSide();
  }
  runOutSide() {
    // this.zone.run(()=>{
    //   setInterval(()=>{
    //     this.time = new Date();
    //   },1000)
    // })
    const nums = of(1, 2, 3);

    const squareValues = map((val: number) => val * val);
    const squaredNums = squareValues(nums);

    squaredNums.subscribe(x => {
      console.log(x)
    });

  }
}

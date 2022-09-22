import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatphone'
})
export class PhonePipe implements PipeTransform {

  transform(input: any, parameters: any,callingCode:any): unknown {
    if (input && input.length == 10) {
      if (parameters == 'IN') {
        //logic to format the input and return
        return `(+${callingCode})-${input.substring(0,5)}-${input.substring(5,10)}`

      }
      else if (parameters == 'US') {
        //logic to format the input and return
        return `(+${callingCode})-${input.substring(0,3)}-${input.substring(3,6)}-${input.substring(6,10)}`

      }
    }
    return `(+${callingCode})-${input}`;
  }

}

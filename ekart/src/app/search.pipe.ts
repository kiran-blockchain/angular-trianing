import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products:Array<any>, search:string) {
    let filteredProducts:any=[]; 
    if(products && products.length>0)
     products.forEach((element:any) => {
      if(  element.name.toLowerCase().startsWith(search.toLowerCase())){
        filteredProducts.push(element);
      }
    });
    return filteredProducts;
    //return products;
  }

}

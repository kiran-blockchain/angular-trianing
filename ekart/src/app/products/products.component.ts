import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private dataSvc: DataService) { 
    this.products=[];
  }
  currentDate=new Date();
  searchText='';
  p:number =1;
  products: any
  ngOnInit(): void {
    this.dataSvc.getProductsFromApi('https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json')
      .subscribe((result: any) => {
        console.log(result);
        this.products = result.map((x: any) => {
          return { ...x, count: 0,totalPrice:0 }
        })
      }, (error: any) => {
        console.log(error);
      })
  }
  addItem(p: any) {
    p.count += 1;
    p.totalPrice = p.count*p.price;
    this.dataSvc.updateCart(p);
  }
  removeItem(p: any) {
    if (p.count > 0) {
      p.count -= 1;
      p.totalPrice = p.count*p.price;
    }
  }
  

}

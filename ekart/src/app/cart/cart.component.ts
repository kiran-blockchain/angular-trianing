import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private dataSvc:DataService) { 
    this.cartProducts =[];
  }
 cartProducts:Array<any>;
  ngOnInit(): void {
    this.cartProducts = this.dataSvc.getCartData();
  }

}

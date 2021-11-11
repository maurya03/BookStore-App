import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
 
 
 



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  
cartItemList: any[] = [];   
cartTotal = 0;
product: any;
  
 

  constructor(private cartDataService: CartService ) {   
  }

  ngOnInit(): void {
    this.cartDataService.latestCartItemsList.subscribe((cartItems:any) =>{
      console.log(cartItems)
      this.cartItemList = cartItems;
    })

     this.calcCartTotal();
  }

 
  calcCartTotal() {
    this.cartTotal = 0;
    this.cartItemList.forEach(item => {
      this.cartTotal += (item.Price)
    })
  }


  delete() {
    this.cartItemList.splice(this.cartItemList.indexOf(this.product), 1);
    // rerender your array
    this.cartItemList = [...this.cartItemList];
     
 }

}

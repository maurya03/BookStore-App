import { Component, OnInit } from '@angular/core';
import { BookModule } from 'src/app/admin/Model/Book';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  public books: any; 
  public products : any = [];
  public book: BookModule = new BookModule();

  constructor(private dataService: DataService, private wishlistService: WishlistService, private cartService: CartService ) { }

  ngOnInit(): void {
    this.wishlistService.getBooks()
    .subscribe(res=>{
      this.books = res;
      // this.grandTotal = this.wishlistService.getTotalPrice();
    })
  }

  add(book: any){
    this.cartService.addtoCart(book);
    this.wishlistService.removeWishlistItem(book);
  }

  remove(book: any){
    this.wishlistService.removeWishlistItem(book);
  }
}
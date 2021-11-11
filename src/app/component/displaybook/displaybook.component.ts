import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';
import { WishlistService } from 'src/app/services/wishlist.service';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
import { BookModule } from 'src/app/admin/Model/Book';
 

@Component({
  selector: 'app-displaybook',
  templateUrl: './displaybook.component.html',
  styleUrls: ['./displaybook.component.css']
})
export class DisplaybookComponent implements OnInit {

 // public IMAGE_URL: any = "http://rjtmobile.com/grocery/images/";

 public products: any;
 public categoryProducts: any;

 public categories: any;

 public catName: any;

 public books: any;
 public subCategories: any;

  LoggedInUserDetails = localStorage.getItem('user');
  
  

isShow = false; 

 searchKey:string = "";
  
isLoggedIn  = localStorage.getItem("token");
public bookId: any;
public catId: any;
 
 

  constructor(private dataService: DataService, private activateRoute:ActivatedRoute,
    private route: Router,private matSnackBar: MatSnackBar, private wishlistService: WishlistService,
    private cartService:CartService
   
    ) {
    this.catName= activateRoute.snapshot.paramMap.get('catName');
    this.bookId = activateRoute.snapshot.paramMap.get('bookId');
    this.catId= activateRoute.snapshot.paramMap.get('catId');
   }

  ngOnInit(): void {
    this.dataService.getBooks().subscribe(response =>{
      this.books = response;
    })
    this.dataService.getCategories().subscribe(data =>{
      this.categories = data;
    })
    this.dataService.getBooksById(this.bookId).subscribe(data =>{
      this.subCategories = data;
    })

    this.dataService.getCategoriesById(this.catId).subscribe(data =>{
      this.products = data;
    })

    // this.books.forEach((a:any) => {
    //   Object.assign(a,{quantity:1,total:a.price})
    // });

    this.cartService.search.subscribe((val:any) =>{
      this.searchKey = val;
    })
  }

   
  addToWish( book: any) {
    // if (localStorage.getItem('token') === null) {
    //   this.matSnackBar.open('Please Login first', 'ok', {
    //     duration: 5000
    //   });
    //   this.route.navigateByUrl('login');
    // }
    // this.matSnackBar.open("LoggedIn");
    this.wishlistService.addtoWishlist(book);
    alert("Book is added to wishlist!");
    }


  // onCategorySelected(catId: any){
  //   this.dataService.getProductById(catId).subscribe(response => {
  //     this.products = response.data;
  //   })
  // }


  addtocart(book: any){
     
    this.cartService.addtoCart(book);
    // this.route.navigateByUrl('cart-component');
  }


  OnCategorySelect(catId:any){
    this.dataService.getBooksByCatId(catId).subscribe(response =>{
      this.books = response;
    })
  }
  // onCategorySelected(catId: any){
  //   this.dataService.getProductById(catId).subscribe(response => {
  //     this.products = response.data;
  //   })
  // }
  onclick(){
    this.route.navigateByUrl('books');
  }

  addbook: BookModule = new BookModule();
  //add to cart handler
  handleAddToCart(book: BookModule, bookId:any,userDetails:any ): void{
    if(window.confirm('Successfully Added!!')){
      this.cartService.addProductToCart(bookId,userDetails).subscribe((book:{}) =>{
        this.route.navigate(['/books'])
      })
    }
    this.cartService.updateCarts(book);
  }


  
}

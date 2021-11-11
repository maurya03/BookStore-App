import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 // ENDPOINTS={
    
  //   CAT_URL: "http://apolis-grocery.herokuapp.com/api/category",
  //   BOOK_URL: "http://apolis-grocery.herokuapp.com/api/products/cat/"
    
  // }

  BOOK = [
    {
      "Id": 1,
      "title": "Dream Wings",
      "Author": "ABC",
      "Price": 499,
      "img_url":"../assets/bookimage/abdul-kalam.jpg"  
    },

    {
      "Id": 2,
      "title": "Dream Wings",
      "Author": "YZF",
      "Price": 800,
      "img_url":"../assets/bookimage/abd.jpg"  
    }
  ]

  CATEGORY = [
    {
      "Id": 1,
      "name": "Computer Science",
      
    },

    {
      "Id": 2,
      "name": "Geography",  
    }
  ]

  constructor(private http:HttpClient) { }

  getBooks() {
    return this.http.get<any>('http://localhost:52232/book');
  }

  getBooksById(bookId:any):Observable<any>{
    return this.http.get<any>('http://localhost:52232/book/'+bookId);
  }

  getCategories(): Observable<any> {
    return this.http.get<any>('http://localhost:52232/category');
  }

  getCategoriesById(catId:any):Observable<any>{
    return this.http.get<any>('http://localhost:52232/category/'+catId);
  }

  getUsers(): Observable<any>{
    return this.http.get<any>('http://localhost:52232/api/user');
  }

  addCategory(data:any):Observable<any>{
    return this.http.post<any>('http://localhost:52232/category',data);
  }
  addBooks(data:any):Observable<any>{
    return this.http.post<any>('http://localhost:52232/book',data);
  }

  deleteCategory(id:number){
    return this.http.delete<any>('http://localhost:52232/category/'+id);
  }

  updateCategory(id:number, data:any):Observable<any>{
    return this.http.put<any>('http://localhost:52232/category/'+id, data);
  }
  updateBooks(id:number, data:any):Observable<any>{
    return this.http.put<any>('http://localhost:52232/book/'+id, data);
  }


  getBooksByCatId(catId:number):Observable<any>{
    return this.http.get<any>('http://localhost:52232/bookByCatId/'+catId);
  }
  // getCategory(): Observable<any>{
  //     return this.http.get<any>(this.ENDPOINTS.CAT_URL);
    
  //  }
  

  // getBookByCatId(catId: number): Observable<any>{
  //   return this.http.get<any>(this.ENDPOINTS.BOOK_URL + catId);
  // }

  setSearchBookData(){
    
  }
}

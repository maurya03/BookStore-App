export class BookModule{
    // [x: string]: any;

    BookId?:number;
    CategoryId?:number;
    Title?:string;
    AuthorName?:string;
    ISBN?:number;
    PublicationYear?:Date;
    Price?:number;
    Description?:string;
    Position?:number;
    Status?:boolean;
    imageName?: string;
    item_qty?: number;

    // constructor(id:number, cid:number,title:string,name:string, isbn:number, year:Date, price:number, desc:string, position:number, status:boolean,image:string, qty:number){
    //     this.BookId = id;
    //     this.CategoryId = cid;
    //     this.Title = title;
    //     this.AuthorName = name;
    //     this.ISBN = isbn;
    //     this.PublicationYear = year;
    //     this.Price = price;
    //     this.Description = desc;
    //     this.Position = position;
    //     this.Status = status;
    //     this.imageName = image;
    //     this.item_qty = qty;
    // }
    
}
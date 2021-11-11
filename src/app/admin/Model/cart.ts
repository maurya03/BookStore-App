import { BookModule } from '../Model/Book';

export class Cart {
    id ?:number;
    productId ?: number;
    productName ?:string;
    qty ?:number;
    price?:number;
    productDesc ?:string;
    productImage ?:string;

    constructor(id:number, product:BookModule, qty=1){
        this.id = id;
        this.productId = product.ISBN;
        this.productName = product.Title;
        this.productDesc = product.Description;
        this.price = product.Price;
        this.qty = qty;
        this.productImage = product.imageName;
    }

}

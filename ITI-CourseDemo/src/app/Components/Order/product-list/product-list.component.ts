import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  categoryList:ICategory[];
  productList:IProduct[];
  selectedCatId:number = 0;
  orderToralPrice:number = 0;
  isSecondary:boolean = true;
  today:Date;

  constructor() {
    this.productList = [
      {
        id: 1,
        name: 'Product 1',
        price: 100000,  
        quantity: 5,
        imageURL: 'https://fakeimg.pl/200x100/',
        categoryId: 1
      },
      {
        id: 2,
        name: 'Product 2',
        price: 120000,  
        quantity: 0,
        imageURL: 'https://fakeimg.pl/200x100/',
        categoryId: 1
      },
      {
        id: 3,
        name: 'Product 3',
        price: 80000,  
        quantity: 15,
        imageURL: 'https://fakeimg.pl/200x100/',
        categoryId: 2
      },
      {
        id: 4,
        name: 'Product 4',
        price: 230000,  
        quantity: 1,
        imageURL: 'https://fakeimg.pl/200x100/',
        categoryId: 3
      },
      {
        id: 5,
        name: 'Product 5',
        price: 180000,  
        quantity: 10,
        imageURL: 'https://fakeimg.pl/200x100/',
        categoryId: 3
      },
      {
        id: 6,
        name: 'Product 6',
        price: 240000,  
        quantity: 0,
        imageURL: 'https://fakeimg.pl/200x100/',
        categoryId: 1
      },
    ];

    this.categoryList = [
      {id: 1, name: "Cat 1"},
      {id: 2, name: "Cat 2"},
      {id: 3, name: "Cat 3"},
    ]
    
    this.today = new Date();
  }

  productTrackByFn(index:number, product:IProduct):number 
  {
    return product.id;
  }

  buy(productPrice:number, count:string) {
    //> implicit convertion:
    // let itemsCount:number = count;    

    //> explicit convertion:
    // let itemsCount:number = parseInt(count);     // if can't, return undefined
    // itemsCount = Number(count);           // if can't, return 0
    // itemsCount = count as number;
    // itemsCount = +count;

    this.orderToralPrice = parseInt(count) * productPrice;
  }

  changeCat() {
    this.selectedCatId = 1; 
  }
}

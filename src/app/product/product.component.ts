import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, 'First Product', 1.99, 3.5, 'This is the first product', ['Furniture', 'Daily']),
      new Product(2, 'Second Product', 2.99, 4.5, 'This is the second product', ['Daily']),
      new Product(3, 'Third Product', 10.99, 2, 'This is the third product', ['Book'])
    ];
  }

}

export class Product {

  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public category: Array<string>
  ) {

  }

}

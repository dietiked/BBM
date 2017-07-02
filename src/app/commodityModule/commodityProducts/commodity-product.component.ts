import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { CommodityProductService } from './commodity-product.service';

@Component({
  moduleId: module.id,
  templateUrl: './commodity-product.component.html',
})

export class CommodityProductComponent implements OnInit {
  
  products: FirebaseListObservable<any>;

  constructor(
    private productService: CommodityProductService
  ) { }

  ngOnInit() {
    this.products = this.productService.products();
    this.products.subscribe(x => {
      console.log(x);
    })
  }
  
}

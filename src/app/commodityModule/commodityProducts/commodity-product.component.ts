import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { CommodityProduct } from './commodity-product';
import { CommodityProductService } from './commodity-product.service';

@Component({
  moduleId: module.id,
  templateUrl: './commodity-product.component.html',
})

export class CommodityProductComponent implements OnInit {
  
  products: CommodityProduct[];

  constructor(
    private productService: CommodityProductService
  ) { }

  ngOnInit() {
    this.productService.products()
    .subscribe(products => {
      this.products = products;
    })
  }
  
}

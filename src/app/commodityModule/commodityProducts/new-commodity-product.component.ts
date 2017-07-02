import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { CommodityProductService } from './commodity-product.service';
import { CommodityCategoryService } from '../commodityCategories/index';
import { CommodityProduct } from './index';

@Component({
  moduleId: module.id,
  templateUrl: './new-commodity-product.component.html',
})

export class NewCommodityProductComponent implements OnInit {
  
  public product = new CommodityProduct();
  public categories = [];

  constructor(
    private productService: CommodityProductService,
    private categoryService: CommodityCategoryService
  ) { }

  ngOnInit() {
    this.categoryService.categories()
    .subscribe(categories => this.categories = categories);
  }

  save() {
      this.productService.save(this.product);
  }
  
}

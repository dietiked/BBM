import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { NavigationService } from '../../_sharedServices/navigation.service';
import { CommodityProductService } from '../_services/index';
import { CommodityCategoryService } from '../commodityCategories/index';
import { CommodityProduct } from '../_models/index';

@Component({
  moduleId: module.id,
  templateUrl: './new-commodity-product.component.html',
})

export class NewCommodityProductComponent implements OnInit {
  
  public product = new CommodityProduct();
  public categories = [];

  constructor(
    private productService: CommodityProductService,
    private categoryService: CommodityCategoryService,
    private navService: NavigationService,
  ) { }

  ngOnInit() {
    this.categoryService.categories()
    .subscribe(categories => this.categories = categories);
  }

  save() {
      this.productService.save(this.product)
      .then(_ => {
        this.navService.goToCommodities();
      });
  }
  
}

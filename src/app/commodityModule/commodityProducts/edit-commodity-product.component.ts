import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { NavigationService } from '../../_sharedServices/navigation.service';
import { CommodityProductService } from './commodity-product.service';
import { CommodityCategoryService } from '../commodityCategories/index';
import { CommodityProduct } from './index';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  templateUrl: './edit-commodity-product.component.html',
})

export class EditCommodityProductComponent implements OnInit {
  
  public product = new CommodityProduct();
  public categories = [];

  constructor(
    private route: ActivatedRoute,
    private navService: NavigationService,
    private productService: CommodityProductService,
    private categoryService: CommodityCategoryService
  ) { }

  ngOnInit() {
    this.categoryService.categories()
    .subscribe(categories => this.categories = categories);

    this.route.params
    .switchMap((params: Params) => 
      this.productService.productWithKey(params['id']))
      .subscribe((product:CommodityProduct) => {
        this.product = product;
    });  
  }

  save() {
      this.productService.update(this.product)
      .then(_ => {
        this.navService.goToCommodities();
      });
  }
  
}

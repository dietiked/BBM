import { Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { CommodityDefinition } from '../commodity.definition';
import { CommodityProduct } from './commodity-product';
import { CommodityCategoryService } from '../commodityCategories/index';

@Injectable()
export class CommodityProductService implements OnInit {

  _products: FirebaseListObservable<CommodityProduct[]>;

  constructor(
    private af: AngularFireDatabase,
    private categoryService: CommodityCategoryService,
  ) {
    this._products = this.af.list(CommodityDefinition.products());
  }

  ngOnInit() {
  }

  public products(): Observable<CommodityProduct[]> {
    let observable = Observable.create((observer) => {
      let myProducts = this._products
      .map((dbProducts: CommodityProduct[]) => {
        for (let dbProduct of dbProducts) {
          this.categoryService.categoryWithKey(dbProduct.category)
          .subscribe(category => {
            dbProduct.category = category;
          });
        }
        return dbProducts;
      });
      observer.next(myProducts);
    });

    return observable

  }

  public save(product) {
    this._products.push(product);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { NavigationService } from '../../_sharedServices/navigation.service';
import { CommodityProductService } from '../_services/index';
import { CommodityMovementService } from '../_services/index';
import { CommodityProduct } from '../_models/index';
import { CommodityMovement } from '../_models/index';

@Component({
  moduleId: module.id,
  templateUrl: './detail-commodity-product.component.html',
})

export class DetailCommodityProductComponent implements OnInit {
  
  public product = new CommodityProduct();
  public movements: CommodityMovement[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private navService: NavigationService,
    private productService: CommodityProductService,
    private movementService: CommodityMovementService,
  ) { }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => 
      this.productService.productWithKey(params['id']))
      .subscribe((product:CommodityProduct) => {
        this.product = product;
    });  

    this.route.params
    .switchMap((params: Params) => 
      this.movementService.movementsForProduct(params['id']))
      .subscribe((movements:CommodityMovement[]) => {
        this.movements = movements;
    });  

  }

  public cancel() {
    this.location.back();
  }  
    
}

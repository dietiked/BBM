import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { NavigationService } from '../../_sharedServices/navigation.service';
import { CommodityProductService, CommodityMovementService } from '../_services/index';
import { CommodityProduct, CommodityMovement } from '../_models/index';

@Component({
  moduleId: module.id,
  templateUrl: './new-commodity-movement.component.html',
})

export class NewCommodityMovementComponent implements OnInit {
  
  public product = new CommodityProduct();
  public movement = new CommodityMovement();

  constructor(
    private route: ActivatedRoute,
    private productService: CommodityProductService,
    private movementService: CommodityMovementService,
    private navService: NavigationService,
  ) { }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => 
      this.productService.productWithKey(params['id']))
      .subscribe((product:CommodityProduct) => {
        this.product = product;
    });  
  }

  save() {
      this.movementService.save(this.movement, this.product['$key'])
      .then(_ => {
        this.navService.goToCommodities();
      });
  }
  
}

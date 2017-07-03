import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { NavigationService } from '../../_sharedServices/navigation.service';
import { CommodityProductService, CommodityMovementService } from '../_services/index';
import { CommodityProduct, CommodityMovement } from '../_models/index';

@Component({
  moduleId: module.id,
  templateUrl: './edit-commodity-movement.component.html',
})

export class EditCommodityMovementComponent implements OnInit {
  
  public product = new CommodityProduct();
  public movement = new CommodityMovement();

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private productService: CommodityProductService,
    private movementService: CommodityMovementService,
    private navService: NavigationService,
  ) { }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => 
      this.movementService.movementWithKeyForProduct(params['movementId'], params['id']))
      .subscribe((movement:CommodityMovement) => {
          console.log('Movement', movement);
          this.movement = movement;
    });  
    this.route.params
    .switchMap((params: Params) => 
      this.productService.productWithKey(params['id']))
      .subscribe((product:CommodityProduct) => {
          this.product = product;
    });  
  }

  public save() {
      this.movementService.update(this.movement)
      .then(_ => {
        this.location.back();
      });
  }

  public cancel() {
    this.location.back();
  }
  
}

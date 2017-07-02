import { Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { CommodityDefinition } from '../commodity.definition';
import { CommodityMovement } from '../_models/index';

@Injectable()
export class CommodityMovementService implements OnInit {

  _movements: FirebaseListObservable<CommodityMovement[]>;
  _movement: FirebaseObjectObservable<CommodityMovement>;

  constructor(
    private af: AngularFireDatabase,
  ) {
  }

  ngOnInit() {
  }

  public movementsForProduct(productKey: string): Observable<CommodityMovement[]> {
    this._movements = this.af.list(CommodityDefinition.movementsForProduct(productKey));
    return this._movements;
  }

  public movementWithKeyForProduct(key: string, productKey: string) {
    this._movement = this.af.object(CommodityDefinition.movementWithKeyForProduct(key, productKey));
    return this._movement;
  }

  public save(movement, productKey) {
    if (! this._movements) {
        this._movements = this.af.list(CommodityDefinition.movementsForProduct(productKey));
    }
    return this._movements.push(movement);
  }

  public update(movement) {
    return this._movement.update(movement);
  }

}

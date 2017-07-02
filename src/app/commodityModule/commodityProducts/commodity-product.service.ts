import { Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { CommodityDefinition } from '../commodity.definition';

@Injectable()
export class CommodityProductService implements OnInit {

  constructor(
    private af: AngularFireDatabase
  ) {
  }

  ngOnInit() {
  }

  public products(): FirebaseListObservable<any> {
    return this.af.list(CommodityDefinition.products());
  }

}

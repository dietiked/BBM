import { Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { CommodityDefinition } from '../commodity.definition';

@Injectable()
export class CommodityCategoryService implements OnInit {

  constructor(
    private af: AngularFireDatabase
  ) {
  }

  ngOnInit() {
  }

  public categories(): FirebaseListObservable<any[]> {
    return this.af.list(CommodityDefinition.categories());
  }

  public categoryWithKey(key: string): FirebaseObjectObservable<any> {
    return this.af.object(CommodityDefinition.categoryWithKey(key));
  }

}

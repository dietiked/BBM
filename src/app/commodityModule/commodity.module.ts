import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NavigationService } from '../_sharedServices/navigation.service';

import { CommodityRoutingModule } from './commodity.routing';
import { CommodityDefinition } from './commodity.definition';
import { CommodityProductService } from './_services/index';
import { CommodityProductComponent } from './commodityProducts/index';
import { NewCommodityProductComponent } from './commodityProducts/index';
import { EditCommodityProductComponent } from './commodityProducts/index';
import { DetailCommodityProductComponent } from './commodityProducts/index';
import { CommodityCategoryService } from './commodityCategories/index';
import { NewCommodityMovementComponent } from './commodityMovements/index';
import { EditCommodityMovementComponent } from './commodityMovements/index';
import { CommodityMovementService } from './_services/index';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommodityRoutingModule, // Always last!
  ],
  declarations: [
    CommodityProductComponent,
    NewCommodityProductComponent,
    EditCommodityProductComponent,
    DetailCommodityProductComponent,
    NewCommodityMovementComponent,
    EditCommodityMovementComponent,
  ],
  providers: [
    NavigationService,
    CommodityDefinition,
    CommodityProductService,
    CommodityCategoryService,
    CommodityMovementService,
  ],
  bootstrap: []
})
export class CommodityModule { }

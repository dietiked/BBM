import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NavigationService } from '../_sharedServices/navigation.service';

import { CommodityRoutingModule } from './commodity.routing';
import { CommodityDefinition } from './commodity.definition';
import { CommodityProductService } from './commodityProducts/index';
import { CommodityProductComponent } from './commodityProducts/index';
import { NewCommodityProductComponent } from './commodityProducts/index';
import { CommodityCategoryService } from './commodityCategories/index';

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
  ],
  providers: [
    NavigationService,
    CommodityDefinition,
    CommodityProductService,
    CommodityCategoryService,
  ],
  bootstrap: []
})
export class CommodityModule { }

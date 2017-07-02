import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NavigationService } from '../_sharedServices/navigation.service';

import { CommodityRoutingModule } from './commodity.routing';
import { CommodityDefinition } from './commodity.definition';
import { CommodityProductService } from './commodityProducts/index';
import { CommodityProductComponent } from './commodityProducts/index';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommodityRoutingModule, // Always last!
  ],
  declarations: [
    CommodityProductComponent,
  ],
  providers: [
    NavigationService,
    CommodityDefinition,
    CommodityProductService,
  ],
  bootstrap: []
})
export class CommodityModule { }

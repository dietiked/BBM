import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommodityProductComponent } from './commodityProducts/index';
import { NewCommodityProductComponent } from './commodityProducts/index';
import { EditCommodityProductComponent } from './commodityProducts/index';

const commodityRoutes: Routes = [
    { path: 'commodities', component: CommodityProductComponent, canActivate: [] },
    { path: 'commodities/products', component: CommodityProductComponent, canActivate: [] },
    { path: 'commodities/products/new', component: NewCommodityProductComponent, canActivate: [] },
    { path: 'commodities/products/:id', component: EditCommodityProductComponent, canActivate: [] },
];

@NgModule({
  imports: [ RouterModule.forChild(commodityRoutes) ],
  exports: [ RouterModule ]
})
export class CommodityRoutingModule { }

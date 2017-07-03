import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommodityProductComponent } from './commodityProducts/index';
import { NewCommodityProductComponent } from './commodityProducts/index';
import { EditCommodityProductComponent } from './commodityProducts/index';
import { DetailCommodityProductComponent } from './commodityProducts/index';
import { NewCommodityMovementComponent } from './commodityMovements/index';
import { EditCommodityMovementComponent } from './commodityMovements/index';

const commodityRoutes: Routes = [
    { path: 'commodities', component: CommodityProductComponent, canActivate: [] },
    { path: 'commodities/products', component: CommodityProductComponent, canActivate: [] },
    { path: 'commodities/products/new', component: NewCommodityProductComponent, canActivate: [] },
    { path: 'commodities/products/:id', component: DetailCommodityProductComponent, canActivate: [] },
    { path: 'commodities/products/:id/edit', component: EditCommodityProductComponent, canActivate: [] },
    { path: 'commodities/products/:id/movements/new', component: NewCommodityMovementComponent, canActivate: [] },
    { path: 'commodities/products/:id/movements/:movementId', component: EditCommodityMovementComponent, canActivate: [] },
];

@NgModule({
  imports: [ RouterModule.forChild(commodityRoutes) ],
  exports: [ RouterModule ]
})
export class CommodityRoutingModule { }

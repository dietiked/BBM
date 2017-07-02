import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRouting }     from './app.routing';
import { SidebarModule } from './sidebarModule/sidebar.module';
import { DashboardComponent } from './dashboardComponent/dashboard.component';
import { CommodityModule } from './commodityModule/commodity.module';

import { NavigationService } from './_sharedServices/navigation.service';

// Firebase configuration
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase, 'bbm'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    SidebarModule,
    CommodityModule,
    AppRouting, // Always last!
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  providers: [
    NavigationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxDataGridModule, DxBulletModule, DxTemplateModule } from 'devextreme-angular';
import { Routes, RouterModule } from '@angular/router';

import { HttpClientModule }   from '@angular/common/http';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderMenuComponent } from './components/layout/components/header-menu/header-menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MonitoringEtlComponent } from './components/monitoring-etl/monitoring-etl.component';
import { MonitoringHostsComponent } from './components/monitoring-hosts/monitoring-hosts.component';
import { MonitoringServicesComponent } from './components/monitoring-services/monitoring-services.component';
import { EtlPageComponent } from './components/etl-page/etl-page.component';
import { HostsPageComponent } from './components/hosts-page/hosts-page.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'etl',
    pathMatch: 'full',
    component: EtlPageComponent,
    data: {
      title: 'ETL processes'
    }
  },
  {
    path: 'hosts',
    pathMatch: 'full',
    component: HostsPageComponent,
    data: {
      title: 'Hosts'
    }
  },
  {
    path: 'services',
    pathMatch: 'full',
    component: ServicesPageComponent,
    data: {
      title: 'Services'
    }
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderMenuComponent,
    DashboardComponent,
    NotFoundComponent,
    MonitoringEtlComponent,
    MonitoringHostsComponent,
    MonitoringServicesComponent,
    EtlPageComponent,
    HostsPageComponent,
    ServicesPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    DxDataGridModule,
    DxBulletModule,
    DxTemplateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemRoutingModule } from './system-routing.module';
import { SystemLayoutComponent } from './layouts/system-layout/system-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SystemLayoutComponent, HomePageComponent],
  imports: [CommonModule, SystemRoutingModule, SharedModule],
})
export class SystemModule {}

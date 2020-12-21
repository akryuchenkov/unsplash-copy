import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SystemRoutingModule} from './system-routing.module';
import {SystemLayoutComponent} from './layouts/system-layout/system-layout.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {SharedModule} from '../shared/shared.module';
import {PageComponent} from './pages/page/page.component';
import {UserPageComponent} from './pages/user-page/user-page.component';
import {UnsplashService} from '../shared/unsplash.service';
import { SearchGalleryComponent } from './pages/search-gallery/search-gallery.component';

@NgModule
({
  declarations: [SystemLayoutComponent, HomePageComponent, PageComponent, UserPageComponent, SearchGalleryComponent],
  imports: [CommonModule, SystemRoutingModule, SharedModule],
  exports: [
    HomePageComponent,
    PageComponent,
    UserPageComponent
  ],
  providers: [UnsplashService]
})
export class SystemModule {
}

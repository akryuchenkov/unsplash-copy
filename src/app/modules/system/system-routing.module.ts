import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemLayoutComponent } from './layouts/system-layout/system-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageComponent } from './pages/page/page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { LoginComponent } from '../auth/components/login/login.component';
import { RegisterComponent } from '../auth/components/register/register.component';
import {SearchGalleryComponent} from './pages/search-gallery/search-gallery.component';
import {SerComponent} from '../shared/components/ser/ser.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'user',
        component: UserPageComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'join',
        component: RegisterComponent,
      },
      {
        path: 'ser',
        component: SerComponent,
      },
      {
        path: 'search/:srch',
        component: SearchGalleryComponent,
      },
      {
        path: ':topic',
        component: PageComponent,
      },
      {
        path: '**',
        component: HomePageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRoutingModule {}

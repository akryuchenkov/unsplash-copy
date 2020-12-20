import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SystemLayoutComponent} from './layouts/system-layout/system-layout.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {PageComponent} from './pages/page/page.component';
import {UserPageComponent} from './pages/user-page/user-page.component';
import {LoginComponent} from '../auth/components/login/login.component';
import {RegisterComponent} from '../auth/components/register/register.component';
import {SearchGalleryComponent} from "./pages/search-gallery/search-gallery.component";

const routes: Routes = [
  {
    path: '',
    component: SystemLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
    ],
  },
  {
    path: '{{topic.id}}',
    component: SystemLayoutComponent,
    children: [
      {
        path: '',
        component: PageComponent,
      },
    ],
  },
  {
    path: 'user',
    component: SystemLayoutComponent,
    children: [
      {
        path: '',
        component: UserPageComponent,
      },
    ],
  },
  {
    path: 'login',
    component: SystemLayoutComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
    ],
  },
  {
    path: 'join',
    component: SystemLayoutComponent,
    children: [
      {
        path: '',
        component: RegisterComponent,
      },
    ],
  },
  {
    path: 'search',
    component: SystemLayoutComponent,
    children: [
      {
        path: '',
        component: SearchGalleryComponent,
      },
    ],
  },
  {
    path : '**',
    component: HomePageComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRoutingModule {}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SystemLayoutComponent} from './layouts/system-layout/system-layout.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {PageComponent} from './pages/page/page.component';
import {UserPageComponent} from './pages/user-page/user-page.component';

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
    path: 'test',
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
    path : '**',
    component: HomePageComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRoutingModule {}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './modules/shared/shared.module';
import {AuthModule} from './modules/auth/auth.module';
import { SystemModule } from './modules/system/system.module';
import {UnsplashService} from './modules/shared/unsplash.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SystemModule,
    AuthModule,
    HttpClientModule
  ],
  providers: [UnsplashService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

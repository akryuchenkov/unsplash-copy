import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './components/menu/menu.component';
import {SearchInputComponent} from './components/search-input/search-input.component';
import {FormsModule} from '@angular/forms';
import {BarComponent} from './components/bar/bar.component';
import {LoComponent} from './components/login/lo.component';
import {UnsplashService} from './unsplash.service';
import { SubmitComponent } from './components/submit/submit.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { GalleryComponent } from './components/gallery/gallery.component';

@NgModule({
  declarations: [
    MenuComponent,
    SearchInputComponent,
    BarComponent,
    LoComponent,
    SubmitComponent,
    GalleryComponent,
  ],
  imports: [CommonModule, FormsModule, MatButtonModule, MatDialogModule],
  exports: [MenuComponent, SearchInputComponent, BarComponent, LoComponent, GalleryComponent],
  providers: [UnsplashService]
})
export class SharedModule {}

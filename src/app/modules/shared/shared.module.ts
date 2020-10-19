import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './components/menu/menu.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import {FormsModule} from '@angular/forms';
import { BarComponent } from './components/bar/bar.component';


@NgModule({
  declarations: [MenuComponent, SearchInputComponent, BarComponent],
    imports: [
        CommonModule,
        FormsModule
    ],
  exports: [MenuComponent, SearchInputComponent ]
})
export class SharedModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { FormsModule } from '@angular/forms';
import { BarComponent } from './components/bar/bar.component';
import { LoComponent } from './components/login/lo.component';

@NgModule({
  declarations: [
    MenuComponent,
    SearchInputComponent,
    BarComponent,
    LoComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [MenuComponent, SearchInputComponent],
})
export class SharedModule {}

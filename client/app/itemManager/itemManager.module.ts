import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {UserConfigComponent} from './user/user.config.component';
import {SettingsConfigComponent} from './settings/settings.config.component';
import {IngredientConfigComponent} from './ingredients/ingredient.config.component';
import {BurgerConfigComponent} from './burger/burger.config.component';
import {SidedishConfigComponent} from './sidedish/sidedish.config.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ItemArrayComponent} from './shared/item-array/item-array.component';
import {ItemControlComponent} from './shared/item-array/item-control/item-control.component';
import {ItemManagerComponent} from './itemManager.component';
import {ScrollbarModule} from 'ngx-scrollbar';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  declarations: [
    UserConfigComponent,
    SettingsConfigComponent,
    IngredientConfigComponent,
    BurgerConfigComponent,
    SidedishConfigComponent,
    ItemArrayComponent,
    ItemControlComponent,
    ItemManagerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ScrollbarModule
  ],
  providers: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ItemManagerModule {}

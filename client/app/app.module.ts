import {NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';

import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {DishService} from './services/dish.service';
import {SideDishComponent} from './side-dish/side-dish.component';
import {BurgerComponent} from './burger/burger.component';
import {BurgerCreationComponent} from './burgerCreation/burgerCreation.component';
import {OrderComponent} from './order/order.component';
import {OrderFinishedComponent} from './order/order-finished/order-finished.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ScrollbarModule} from 'ngx-scrollbar';
import {ItemManagerModule} from './itemManager/itemManager.module';
import {BrowserModule} from '@angular/platform-browser';
import {AddressComponent} from './address/address.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    NotFoundComponent,
    HomeComponent,
    NavbarComponent,
    SideDishComponent,
    BurgerComponent,
    BurgerCreationComponent,
    OrderComponent,
    OrderFinishedComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ItemManagerModule,
    ScrollbarModule
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    UserService,
    DishService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }

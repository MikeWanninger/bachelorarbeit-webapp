import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import {HomeComponent} from './home/home.component';
import {SideDishComponent} from './side-dish/side-dish.component';
import {BurgerComponent} from './burger/burger.component';
import {BurgerCreationComponent} from './burgerCreation/burgerCreation.component';
import {OrderComponent} from './order/order.component';
import {OrderFinishedComponent} from './order/order-finished/order-finished.component';
import {ItemManagerComponent} from './itemManager/itemManager.component';
import {AddressComponent} from './address/address.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'side-dish', component: SideDishComponent },
  { path: 'burger', component: BurgerComponent },
  { path: 'burger-create', component: BurgerCreationComponent },
  { path: 'order', component: OrderComponent },
  { path: 'order-finished', component: OrderFinishedComponent },
  { path: 'item-manager', component: ItemManagerComponent, canActivate: [AuthGuardAdmin] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'address', component: AddressComponent, canActivate: [AuthGuardLogin] },
  { path: 'logout', component: LogoutComponent },
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}

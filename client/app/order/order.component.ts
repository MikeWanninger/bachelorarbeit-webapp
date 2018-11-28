import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {DishService} from '../services/dish.service';
import {Dish} from '../shared/models/dish.model';
import {Order} from '../shared/models/order.model';
import {UserService} from '../services/user.service';
import {User} from '../shared/models/user.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  dishes: Dish[] = [];
  user: User = new User();

  constructor(
    public authService: AuthService,
    private router: Router,
    private dishService: DishService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
    this.dishService.dishesChanged.subscribe(
      (dishes: Dish[]) => {
        this.dishes = dishes;
      }
    );

    if (this.authService.loggedIn) {
      this.userService.getUser(this.authService.currentUser).subscribe(
        (user) => {
          this.user = user;
        }
      );
    }
  }

  onFormSubmit() {
    // get token from localstorage if possible
    // post order to database
    // send mail to customer
    this.router.navigate(['../order-finished']);
  }

  doSomething() {
    const order = new Order();
    order.name = this.user.username;
    order.dishes = this.dishes;
    order.price = this.getPrice();
    order.address = this.authService.currentUser.address;
    console.log(order);
  }

  doSomethingUnregistered(form: NgForm) {
    const order = new Order();
    order.name = form.value.lastName;
    order.dishes = this.dishes;
    order.price = this.getPrice();
    order.address = form.value;
    console.log(order);
  }

  getPrice() {
    let price = 0;
    this.dishes.forEach(
      (dish) => {
        price += dish.price;
      }
    );
    return price;
  }
}

import {Component} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {Address} from '../shared/models/Address.model';
const ObjectId = require('bson-objectid');

@Component({
  selector: 'app-address',
  styleUrls: ['./address.component.scss'],
  templateUrl: 'address.component.html'
})
export class AddressComponent {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router) {

  }

  onFormSubmit(form) {
    const address = new Address();
    const el = form.value;
    address.name = el.lastName;
    address.firstName = el.firstName;
    address.street = el.street;
    address.houseNumber = el.houseNr;
    address.town = el.town;
    address.plz = el.plz;
    address.email = el.email;

    const user = this.authService.currentUser;
    user.address = address;
    this.userService.editUser(user).toPromise().then(
      response => {
        this.userService.addressAdded = true;
        this.router.navigate(['/']);
      }
    );
  }
}

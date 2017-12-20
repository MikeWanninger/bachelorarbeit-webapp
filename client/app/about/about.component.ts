import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Http} from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {

  user = {
    name: String,
    password: String,
    email: String
  };

  ingredient = {
    name: String,
    category: String,
    price: Number
  };

  token: String;

  constructor(private http: HttpClient) { }

  onSubmit(form: NgForm) {
    const name = form.value.name;
    const password = form.value.password;
    const email = form.value.email;
    this.user = {name, password, email};
    this.login(this.user).subscribe(
      (result) => {
        this.token = result['token'];
      }
    );
  }

  login(user) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/api/login', JSON.stringify(this.user), {headers: headers});
  }

  addIngredient(form: NgForm) {
    const name = form.value.name;
    const category = form.value.category;
    const price = form.value.price;
    this.ingredient = {name, category, price};
    const header = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.post('http://localhost:3000/api/ingredient?token=' + this.token, JSON.stringify(this.ingredient), {headers: header})
      .subscribe(
        (result) => {
          console.log(result);
        }
      );
  }
}

import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {User} from '../../shared/models/user.model';
import {UserService} from '../../services/user.service';
import {ToastComponent} from '../../shared/toast/toast.component';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-config-settings',
  templateUrl: './settings.config.component.html',
  styleUrls: ['../itemManager.component.scss']
})
export class SettingsConfigComponent implements OnInit {
  form: FormGroup;
  private user: User;

  constructor(private userService: UserService,
              public toast: ToastComponent,
              private authService: AuthService) {

    this.form = new FormGroup({
      'username': new FormControl(''),
      'email': new FormControl(''),
      'role': new FormControl('')
    });
    this.initForm();
  }

  ngOnInit() {}

  private initForm() {
    const username = this.userService.getUser(this.authService.currentUser).subscribe(
      (user) => {
        this.user = user;
        this.form = new FormGroup({
          'username': new FormControl(user.username),
          'email': new FormControl(user.email),
          'role': new FormControl(user.role)
        });
      }
    );
  }

  saveUser() {
    const user = this.user;
    user.username = this.form.get('username').value;
    user.email = this.form.get('email').value;
    user.role = this.form.get('role').value;
    this.userService.editUser(user).subscribe(
      res => this.toast.setMessage('account settings saved!', 'success'),
      error => console.log(error)
    );
  }
}

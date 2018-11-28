import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../shared/models/user.model';
import {FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {ToastComponent} from '../../shared/toast/toast.component';

@Component({
  selector: 'app-config-user',
  templateUrl: './user.config.component.html',
  styleUrls: ['../itemManager.component.scss']
})
export class UserConfigComponent implements OnInit {
  users: User[] = [];
  form: FormGroup;

  constructor(private userService: UserService,
              public auth: AuthService,
              public toast: ToastComponent) {
    this.form = new FormGroup({});
    this.getUsers();
  }

  ngOnInit() {

  }

  getUsers() {
    this.userService.getUsers().subscribe(
      data => this.users = data,
      error => console.log(error)
    );
  }

  deleteUser(user) {
    if (window.confirm(`Are you sure you want to delete ${user.username}?`)) {
      this.userService.deleteUser(user).subscribe(
        data => this.toast.setMessage('user deleted successfully.', 'success'),
        error => console.log(error),
        () => this.getUsers()
      );
    }
  }
}

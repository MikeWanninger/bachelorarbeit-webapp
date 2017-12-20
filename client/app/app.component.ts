import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { mongoose } from 'mongoose';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(public auth: AuthService) { }

}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  Eye,
  Lock,
  LucideAngularModule,
  Mail,
  ShieldCheck
} from 'lucide-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    LucideAngularModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  readonly Eye = Eye;

  readonly Lock = Lock;

  readonly Mail = Mail;

  readonly ShieldCheck = ShieldCheck;

  showPassword = false;

  rememberMe = true;

  constructor(
    private router: Router
  ) {}

  login() {
    this.router.navigate(['/dashboard']);
  }
}

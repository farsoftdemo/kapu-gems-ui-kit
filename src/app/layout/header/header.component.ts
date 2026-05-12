import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';
import {
  LogOut,
  LucideAngularModule,
  Search,
  ShoppingCart,
  X
} from 'lucide-angular';

@Component({
  selector: 'app-header',

  standalone: true,

  imports: [
    CommonModule,
    LucideAngularModule
  ],

  templateUrl: './header.component.html',

  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  readonly LogOut = LogOut;

  readonly Search = Search;

  readonly ShoppingCart = ShoppingCart;

  readonly X = X;

  showProfileModal = false;

  toggleProfileModal(): void {

    this.showProfileModal =
      !this.showProfileModal;
  }
}

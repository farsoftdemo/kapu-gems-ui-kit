import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  RouterLink,
  RouterLinkActive
} from '@angular/router';


import {
  LucideAngularModule,
  LayoutDashboard,
  Search,
  Sparkles,
  Gem,
  HandCoins,
  ShoppingCart,
  Truck,
  ClipboardList,
  FileText,
  Eye,
  ShoppingBag,
  KeyRound,
  Menu,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  standalone: true,

  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    LucideAngularModule
  ],

  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output()
  collapsedChange =
    new EventEmitter<boolean>();

  isCollapsed = false;

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;

    this.collapsedChange.emit(this.isCollapsed);
  }

  mobileSidebarOpen = false;

  readonly Menu = Menu;

  readonly LayoutDashboard = LayoutDashboard;

  readonly Search = Search;

  readonly Sparkles = Sparkles;

  readonly Gem = Gem;
  readonly X = X;

  readonly HandCoins = HandCoins;

  readonly ShoppingCart = ShoppingCart;

  readonly Truck = Truck;

  readonly ClipboardList = ClipboardList;

  readonly FileText = FileText;

  readonly Eye = Eye;

  readonly ShoppingBag = ShoppingBag;

  readonly KeyRound = KeyRound;

  readonly ChevronLeft = ChevronLeft;

  readonly ChevronRight = ChevronRight;

  toggleMobileSidebar(): void {

  this.mobileSidebarOpen =
    !this.mobileSidebarOpen;
}

  closeMobileSidebar(): void {

    this.mobileSidebarOpen = false;
  }
}

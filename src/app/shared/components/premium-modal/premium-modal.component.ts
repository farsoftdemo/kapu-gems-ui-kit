import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  Sparkles,
  X
} from 'lucide-angular';

@Component({
  selector: 'app-premium-modal',

  standalone: true,

  imports: [
    CommonModule,
    LucideAngularModule
  ],

  templateUrl: './premium-modal.component.html',

  styleUrls: ['./premium-modal.component.scss']
})

export class PremiumModalComponent {
  readonly Sparkles = Sparkles;

  readonly X = X;

  /* =========================
     INPUT
  ========================= */

  @Input()
  isOpen = false;

  /* =========================
     OUTPUT
  ========================= */

  @Output()
  closeModal =
    new EventEmitter<void>();

  /* =========================
     CLOSE
  ========================= */

  onClose(): void {

    this.closeModal.emit();
  }
}

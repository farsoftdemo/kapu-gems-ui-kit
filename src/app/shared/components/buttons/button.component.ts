import { Component, Input } from '@angular/core';

@Component({
  selector: 'kg-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label = '';
}

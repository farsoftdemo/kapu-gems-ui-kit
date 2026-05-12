import { Component, Input } from '@angular/core';

@Component({
  selector: 'kg-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() placeholder = '';
}

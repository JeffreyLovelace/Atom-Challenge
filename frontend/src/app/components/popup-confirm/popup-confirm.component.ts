import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup-confirm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup-confirm.component.html',
  styleUrls: ['./popup-confirm.component.scss']
})
export class PopupConfirmComponent {
  @Input() message = 'Are you sure?';
  @Output() result = new EventEmitter<boolean>();

  confirm() { this.result.emit(true); }
  cancel() { this.result.emit(false); }
}

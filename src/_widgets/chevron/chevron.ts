import {Component, Input, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'chevron',
  templateUrl: './chevron.html',
  styleUrls: ['./chevron.css']
})
export class ChevronComponent {
  @Output() hiddenChange: EventEmitter<boolean>;
  @Input() hidden = false;

  constructor() {
    this.hiddenChange = new EventEmitter<boolean>();
  }

  change(event) {
    this.hidden = !this.hidden;
    this.hiddenChange.emit(this.hidden);
  }
}

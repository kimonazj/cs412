import {Component, EventEmitter,  Output} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {
  city: string = '';
  constructor() { }

  @Output() sendCityName: EventEmitter<string> = new EventEmitter<string>();

  sendCity(value: string) {
    this.sendCityName.emit(value);
  }

}

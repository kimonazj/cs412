import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS6';
  currentCity = "Boston";
  getCityName(evt: string) {
    this.currentCity = evt
  }
}

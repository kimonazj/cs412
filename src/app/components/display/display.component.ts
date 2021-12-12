import { Component, Input } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  json: any;
  private errorMessage: any;

  constructor(private http: HttpClient) { }

  isVisible: boolean = true;

  visibility() {
    this.isVisible = !this.isVisible;
  }

  @Input() city: string = "";

  fakeArray = new Array(5);

  SearchWeather() {
    this.http.post('http://localhost:3000/ps4', { location: this.city}).subscribe({next:data => {
        this.json = data;
        //console.log(this.json)
      },
      error:error=>{
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    })
  }

}

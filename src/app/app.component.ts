import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tiles = [
    {text: 'Trip 1', location: "Rijeka, Croatia", date: "July 2017"},
    {text: 'Trip 2', location: "Skopje, Macedonia", date: "August 2017"},
    {text: 'Trip 3', location: "Sarajevo, Bosnia", date: "August 2017"},
    {text: 'Trip 4', location: "Bled, Slovenia", date: "September 2017"},
    {text: 'Trip 5', location: "Rome, Italy", date: "October 2017"}
  ];
}

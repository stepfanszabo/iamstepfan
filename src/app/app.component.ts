import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public port_photos = [
    {text: 'Photo 1', src: "assets/img/photo_1.jpg", origin: "July 2017"},
    {text: 'Photo 2', src: "assets/img/photo_2.jpg", origin: "July 2017"},
    {text: 'Photo 3', src: "assets/img/photo_3.jpg", origin: "July 2017"},
    {text: 'Photo 4', src: "assets/img/photo_4.jpg", origin: "July 2017"},
    {text: 'Photo 5', src: "assets/img/photo_5.jpg", origin: "July 2017"},
    {text: 'Photo 6', src: "assets/img/photo_6.jpg", origin: "July 2017"},
    {text: 'Photo 7', src: "assets/img/photo_7.jpg", origin: "July 2017"},
    {text: 'Photo 9', src: "assets/img/photo_9.jpg", origin: "July 2017"},
    {text: 'Photo 10', src: "assets/img/photo_10.jpg", origin: "July 2017"},
  ];

  public personal_data = {
    name: "Stefan Szabo",
    email: "stepfan.szabo@gmail.com",
    address_street: "1000 Street Road",
    address_city: "Budapest",
    address_country: "Hungary", 
    phone: "+36-30-570-9004"
  };
}

import { Component } from '@angular/core';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  storeInfo:StoreData;
  showImage:boolean = true;

  constructor() {
    this.storeInfo = new StoreData("ITI store", "https://picsum.photos/300/300", ["Cairo", "Alex", "Aswan"]);
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }
}



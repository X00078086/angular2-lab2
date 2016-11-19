import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert-km2mi-mi2km',
  templateUrl: './convert-km2mi-mi2km.component.html',
  styleUrls: ['./convert-km2mi-mi2km.component.css']
})
export class ConvertKm2miMi2kmComponent implements OnInit {

clickMessage: number;
clickMessage2: number;
milesToKm: number = 1.609344;
KmToMiles: number = 0.62137119;
  constructor() { }

  // This method handles the button click 
  // Sets the clickMessage property = text input
  // No validation - bad idea!
  
  onClickMe(myMessage: number) {
    
    this.clickMessage = myMessage * this.milesToKm;
  }
  onClickMe2(myMessage2: number) {
    this.clickMessage2 = myMessage2 * this.KmToMiles;


  }
 
  

ngOnInit() {
  
  }
}
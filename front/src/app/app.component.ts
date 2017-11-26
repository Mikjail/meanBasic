import { Component } from '@angular/core';
import { HotelService } from './service/hotel.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public hotels;
 
  constructor(private hotelService: HotelService ) {
    this.hotels = new Array<any>();
   }

   ngOnInit() {
    this.getHotels();
  }


  getHotels(){
    this.hotelService.getAll().subscribe(
      data =>  this.hotels = data,
      error => console.log(error),
      () => console.log("finished")
    );  
  }


}

import { Component } from '@angular/core';
import { HotelService } from './service/hotel.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public filterForm: any={};
  public hotel= { name:'', star:[]}
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

  getByCriteria(){
    console.log(this.hotel)
    
    this.hotelService.getBySearch(this.hotel).subscribe(
      data => this.hotels = data,
      error => console.log(error)
    )
  }

  setCheckBoxValue(event){
    if( event.srcElement.value != ''){
      if(event.srcElement.checked){
        this.hotel.star.push(event.srcElement.value);
      }else{

     let index =  this.hotel.star.indexOf((event.srcElement.value));
     this.hotel.star.splice(index, 1);
      }
    }
    console.log(this.hotel.star)
  }

  arrayStar(numArray:string){
    let test = new Array<any>(parseFloat(numArray));
    return test;
  }


}

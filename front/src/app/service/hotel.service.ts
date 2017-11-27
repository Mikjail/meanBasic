import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/map'

@Injectable()
export class HotelService {
    
    url = 'http://localhost:5000';

    
   constructor(private _http: Http, private requestOptions: RequestOptions) { }
   
   //Trae todos los hoteles de la BBDD
   getAll(){
    return this._http.get(this.url +'/api/hotel').map((response: Response) => response.json());
    }

    getBySearch(parameters){
        console.log(parameters);
        this.requestOptions.params = parameters;
        return this._http.get(this.url  +'/api/hotelByNameAndStar' ,this.requestOptions).map((response: Response) => response.json());
    }
}
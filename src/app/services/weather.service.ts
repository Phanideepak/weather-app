import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constants } from 'src/environments/constant';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient) { }

  getWeatherData(city: string){
     this.http.get(environment.weatherApiUrl,{
      headers : new HttpHeaders()
      .set(Constants.RAPID_API_HOST, environment.rapidAPIHost)
      .set(Constants.RAPID_API_KEY, environment.rapidAPIKey),
      params : new HttpParams()
      .set('q',city)
     },
     ).subscribe((data)=>{
        console.log(data);
     });
  }
}

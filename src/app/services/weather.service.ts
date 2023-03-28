import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Constants } from 'src/constants/constant';
import { env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient) { }

  getWeatherData(city: string){
     console.log(env); 
     return this.http.get(env.WEATHER_API_URL+"/city/"+city,{
      headers : new HttpHeaders()
      .set(Constants.RAPID_API_HOST, env.RAPID_API_HOST)
      .set(Constants.RAPID_API_KEY, env.RAPID_API_KEY),
      params : new HttpParams()
      .set('q',city)
     },
     );
  }
}

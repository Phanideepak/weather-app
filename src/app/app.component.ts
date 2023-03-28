import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private weatherService : WeatherService){
    
  }

  weatherData : any;
  cityName: string = "Delhi";
  responseStatus : number = 200;

  ngOnInit(): void {
     this.getWeatherDataHandle(this.cityName);
  }

  onSubmit(){
     this.getWeatherDataHandle(this.cityName);
     this.cityName = ''
  } 

  private getWeatherDataHandle(cityName : string){
    this.weatherService.getWeatherData(this.cityName).subscribe((data)=>{
      this.weatherData = data;
   },err=>{
      console.log(err.status);
   });
  }

  title = 'weather-app';
}

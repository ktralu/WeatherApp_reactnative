import {useState} from 'react';
import { StyleSheet, SafeAreaView} from "react-native";
import Header from './Header'
import WeatherInfo from './WeatherInfo';
import UpdateLocation from './UpdateLocation';


const WeatherScreen=()=>{


 const[weatherData, setWeatherData]= useState({
   city : 'Tampere',
   description: 'sunny',
   temperature: -12,
   windSpeed: 17, 
   weatherIcon: "01d",
 });

 const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
 const apiKey = '&units=metric&appid=372f58cdd4578e431749980646541770'
 const fetchWeatherData = async (location)=>{
  try{
    const response = await fetch(url + location + apiKey);
    const jsonWeatherObject = await response.json();
    setWeatherData({
      city: jsonWeatherObject.name,
      description: jsonWeatherObject.weather[0].description,
      temperature: jsonWeatherObject.main.temp,
      windSpeed: jsonWeatherObject.wind.speed,
      weatherIcon: jsonWeatherObject.weather[0].icon,
    });
  }
  catch(err){
      console.error(error);
  }
};
const updateLocation = (updateLocation)=>{
fetchWeatherData(updateLocation);
}
  return(
    <SafeAreaView style={styles.container}>
     <Header headerText = {weatherData.city}></Header>
     <WeatherInfo description ={weatherData.description}
                  temperature = {weatherData.temperature}
                  windSpeed ={weatherData.windSpeed}
                  weatherIcon ={weatherData.weatherIcon}
     ></WeatherInfo>
<UpdateLocation initialLocation ={weatherData.city} updateLocation={updateLocation}></UpdateLocation>


    </SafeAreaView>
  );
};
const styles = StyleSheet.create(
  {container:{
    flex:1,
   },
  }
);

export default WeatherScreen;
import {View, Text, StyleSheet, Image} from 'react-native';

const WeatherInfo = ({description, temperature, windSpeed, weatherIcon})=>{

  return(
    <View style = {{flexDirection: 'row'}} >
    <View style={styles.text}>
      <Text style={styles.text2}>{temperature + " °C"}</Text>
      <Text>{description}</Text>
      <Text>{windSpeed + " mph"}</Text>
    </View>
    <View style={styles.dir}>
            <Image style={styles.icon} source={"https://openweathermap.org/img/w/" + weatherIcon + ".png"}></Image>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  icon:{
    width: 70,height: 80
  },
  dir:{
  marginLeft: 60,
  },
  text:{
    fontSize: 30,
    marginRight: 80,
    marginLeft: 10,
    textAlign: 'Left',
  },
 text2:{
   fontSize: 30,
    textAlign: 'Left',
 },
})
export default WeatherInfo;


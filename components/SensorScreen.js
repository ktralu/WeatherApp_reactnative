import {View, Text, StyleSheet, Button} from 'react-native'
import React, { useState, useEffect } from 'react';
import Header from './Header'
import { Accelerometer } from 'expo-sensors';

const SensorScreen =()=>{
  const [sensorData, setSensorData]= useState({
    x:0.4123231313213,
    y:-1.123213214324,
    z:8.14013431431,
  })

  useEffect(() => {
   getAcccelerometerData();
  }, []);

const getAcccelerometerData=()=>{
   Accelerometer.addListener(setSensorData);

}

  return (
    <>
     <Header headerText={"SensorScreen"}></Header>
     <View style={styles.container}>
    <Text>{"X: "+sensorData.x + " Y: "+sensorData.y+ " Z: "+sensorData.z}</Text>
     <Button title={"Start accelerometer"} onPress={()=>getAcccelerometerData()}></Button>
    </View>
    </>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  
});
export default SensorScreen;
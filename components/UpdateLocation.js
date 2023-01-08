import {View, TextInput, Button, StyleSheet} from 'react-native';
import React from 'react';
const UpdateLocation = ({updateLocation}) =>{
  
  const textInputField = React.createRef();
  return(
  <View>
  <TextInput  placeholder={"Search a city"}
              ref = {textInputField}
              style={styles.textInputStyle}
  >
  </TextInput>
  <Button title={"Update"} onPress={() => updateLocation(textInputField.current.value)}></Button>
  </View>
  );
}
const styles = StyleSheet.create(
  {
  textInputStyle:{
      height: 40,
      borderWidth: 2,
      margin: 12,
      paddig: 10,
      borderColor: 'black',
    },
}
);
export default UpdateLocation;
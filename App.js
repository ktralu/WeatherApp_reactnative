import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WeatherScreen from './components/WeatherScreen';
import SensorScreen from './components/SensorScreen';


const Tab = createBottomTabNavigator();

const App = () => {
 
  return (
    <NavigationContainer>
    <Tab.Navigator >
   <Tab.Screen name ="WeatherScreen" component = {WeatherScreen}/>
    <Tab.Screen name ="SensorScreen" component = {SensorScreen}/>
    </Tab.Navigator>
</NavigationContainer>

  );
};

export default App;

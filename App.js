import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import { NavigationContainer } from '@react-navigation/bottom-tabs'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Home } from './components/Home';
import { Settings } from './components/Settings';


const Tab = createBottomTabNavigator();

function App() {
  return (
    // <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    // </NavigationContainer>
  );
}

export default App();

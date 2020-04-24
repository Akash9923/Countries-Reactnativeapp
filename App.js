import React from 'react';
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/HomeScreen'
import ListScreen from './src/ListScreen'

const Navi = createStackNavigator({
  Home: { screen: HomeScreen},
  Countries:{screen:ListScreen}
},{
  initialRouteName:'Home'
   
}
);

const AppContainer =createAppContainer(Navi)
console.disableYellowBox = true

const App: () => React$Node = () => {
  return <AppContainer/>
};

 

export default App;

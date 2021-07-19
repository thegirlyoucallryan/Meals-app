
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {enableScreens} from 'react-native-screens'

import { createStore, combineReducers } from 'redux';
import mealsReducer from './store/reducers/meals';
import {Provider} from 'react-redux'



import MealsNavigation from './Navigation/MealsNavigation';
import { LogBox } from "react-native";
 
 
LogBox.ignoreAllLogs();

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer
})


const store = createStore(rootReducer);


export default function App() {




  return (
    <Provider store={store}>
   <MealsNavigation/>
   </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

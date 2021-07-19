import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import {createDrawerNavigator} from 'react-navigation-drawer';

import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoryMeals from '../Screens/CategoryMeals';
import MealDetail from '../Screens/MealDetail';
import Colors from '../constants/Colors'
import FavoritesScreen from '../Screens/FavoritesScreen';
import FiltersScreen from '../Screens/FiltersScreen'




const defaultStackNavOptions = {
        headerStyle: {
        backgroundColor: Colors.primaryColor,
    },
    headerTintColor: 'white' };



const MealsNavigation = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
      

    },
    CategoryMeals: {
        screen: CategoryMeals,
      
    },
    MealDetail: MealDetail
}, { defaultNavigationOptions: defaultStackNavOptions
});

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetail
},  { defaultNavigationOptions: defaultStackNavOptions})


const FiltersNav = createStackNavigator({
    Filters: FiltersScreen
}, { defaultNavigationOptions: defaultStackNavOptions})


const MealsFavTabNavigator =createBottomTabNavigator({

    Meals: {screen: MealsNavigation, navigationOptions:{
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-restaurant' size={26} color={tabInfo.tintColor}/>;
        }

    }},
    Favorites:{screen: FavNavigator, navigationOptions:{
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-star' size={26} color={tabInfo.tintColor}/>;
        }

    }}}

, {
    tabBarOptions:{
        activeTintColor: Colors.accentColor,
        inactiveTintColor: Colors.primaryColor,
        

        
    }
});


const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen:  MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        },
    },
    Filters: FiltersNav

}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        activeBackgroundColor:"#45AFE6",
        inactiveTintColor: Colors.primaryColor,
        labelStyle:{
            fontSize: 20,
            marginVertical: 20,
            fontWeight: 'bold'
         
        }
      


    }
})

export default createAppContainer(MainNavigator);
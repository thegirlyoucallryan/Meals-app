import React from 'react';
import {View, Text, StyleSheet, FlatList,TouchableOpacity} from 'react-native';
import MealDetail from './MealDetail';

import { CATEGORIES } from './data/dummy-data';
import CategoryMeals from './CategoryMeals';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'

import CategoryGridTile from '../components/CategoryGridTile';





const CategoriesScreen = props => {


    
const renderGridItem = itemData => {
    return (
        <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onSelect={ () => {
            props.navigation.navigate({ routeName: 'CategoryMeals', params: {
                categoryId: itemData.item.id
            }});
        }
        
       
    
    }/>
      
        )
}
  
    return(
       <FlatList numColumns={2} renderItem={renderGridItem} data={CATEGORIES}  />

    )

};

CategoriesScreen.navigationOptions = (navData) => {
    return{
    headerTitle: 'Meal Categories',
    headerLeft:( <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='menu' iconName='ios-menu' onPress={() => {
            navData.navigation.toggleDrawer()
        }}></Item>
    </HeaderButtons>)
    }
   
}

const styles = StyleSheet.create ({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
  
})

export default CategoriesScreen;
import React, { useEffect, useCallback } from 'react';
import {View, Image, Text, StyleSheet, Button, ScrollView} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton';

import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/meals';



const MealDetail = props => {

    const availableMeals = useSelector(state => state.meals.meals);
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);
    const currentMealisFav= useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId));


    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback( () => {
            dispatch(toggleFavorite(mealId))
    }, [dispatch, mealId]);


    useEffect(() => {
        props.navigation.setParams({toggleFav: toggleFavoriteHandler});
    },[toggleFavoriteHandler]);


    useEffect(() => {
        props.navigation.setParams({isFav: currentMealisFav})
    }, [currentMealisFav])

 
    return(
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={{width: '100%', height: 200}}/>
            <View style={styles.details}>
               <Text>{selectedMeal.duration}m</Text>
               <Text>{selectedMeal.complexity.toUpperCase()}</Text>
               <Text>{selectedMeal.affordability.toUpperCase()}</Text>
           </View>
           <Text style={styles.ingredients}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingrdnt => <Text style={{justifyContent: 'center', alignSelf: 'center', ...styles.list}} key={ingrdnt}>{ingrdnt}</Text>)}
             <Text style={styles.ingredients}>Directions</Text>
                {selectedMeal.steps.map(step => <Text style={styles.list} key={step}>{step}</Text>)}
        
        </ScrollView>


    )

};

MealDetail.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const toggleFavorite = navigationData.navigation.getParam('toggleFav');
    const isFav = navigationData.navigation.getParam('isFav');
    

    return{
        headerTitle: mealTitle,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="fav" iconName={isFav ? 'ios-star' : 'ios-star-outline'} onPress={toggleFavorite}/>
        </HeaderButtons>

    }
};

const styles = StyleSheet.create ({
    details: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    },
    image:{
        height: '200',
        width: '100%',
    }, 
    ingredients:{
        fontSize: 22,
        textAlign: 'center',
        padding: 10,
        
    },

    list: {
        paddingHorizontal: 15,
        color: 'purple',
        // borderColor: 'black',
        // borderWidth: 1,
    }
})

export default MealDetail;
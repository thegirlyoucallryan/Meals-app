import React from 'react';
import { View, Text,  StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'



const FavoritesScreen = props => {

    const favMeals = useSelector(state => state.meals.favoriteMeals)

    if(favMeals.length === 0 || !favMeals) {
        return ( <View style={styles.content}>
            <Text style={{color: 'red',fontWeight: 'bold'}}>No Favorites, yet!</Text><Text style={styles.direct}>Add favorites with the star icon in the upper right corner of the recipes.</Text>
        </View>);
    }
 

    return ( <MealList listData={favMeals}  navigation={props.navigation}/>);

    

};

FavoritesScreen.navigationOptions = (navData) =>  {
    return {
    headerTitle: 'Your Favorites',
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='menu' iconName='ios-menu' onPress={() => {
                navData.navigation.toggleDrawer()
            }}/>
        </HeaderButtons>
    )
    }
    
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,



    },
    direct: {
        margin: 30,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 20,
        textAlign: 'center',


    }
})



export default FavoritesScreen;
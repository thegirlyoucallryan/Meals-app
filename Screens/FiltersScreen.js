import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import { useDispatch } from 'react-redux';
import { setFilters } from '../store/actions/meals';



const FilterSwitch = props => {
    return(
        <View style={styles.filterBox}>
            <Text> {props.label}</Text>
            <Switch
                trackColor={{true: Colors.primaryColor, false: Colors.accentColor}}
                thumbColor={Colors.primaryColor}
                value={props.state}
                onValueChange={props.onChange}/>
        </View>
        
    )
}


const FiltersScreen = props => {

    const {navigation} = props;
    const[isGlutenFree, setIsGlutenFree] = useState(false);
    const[isVegan, setIsVegan] = useState(false);
    const[isVegetarian, setIsVegetarian] = useState(false);
    const[isLactoseFree, setIsLactoseFree] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian

        };
        dispatch(setFilters(appliedFilters));
    }, [ isGlutenFree, isVegetarian, isVegan, isLactoseFree, dispatch])

    useEffect(() => {
        navigation.setParams({save: saveFilters})
    }, [saveFilters])


    return(
        <View style={styles.screen}> 
        <Text style={[styles.title]}>Filter Preferences</Text>
        <FilterSwitch label="Gluten-Free" state={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)}/>
        <FilterSwitch label="Vegan" state={isVegan} onChange={newValue => setIsVegan(newValue)}/>
        <FilterSwitch label="Vegetarian" state={isVegetarian} onChange={newValue => setIsVegetarian(newValue)}/>
        <FilterSwitch label="Lactose-Free" state={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)}/>

        </View>


    )

};

FiltersScreen.navigationOptions = (navData) => {
    return {
    headerTitle: 'Filter Options',
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='filtermenu' iconName='ios-menu'  onPress={() =>{
                navData.navigation.toggleDrawer()
            }} />
        </HeaderButtons>
    ),
    headerRight: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='filtermenu' iconName='ios-save'  onPress={navData.navigation.getParam('save')} />
        </HeaderButtons>
    )
    }
};

const styles = StyleSheet.create ({
    screen: {
        flex: 1,
        
        alignItems: 'center'
    },
    title:{
        fontSize: 22,
        margin: 15,
        textAlign: 'center',

    },
    filterBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginVertical: 18,

    }
})

export default FiltersScreen;
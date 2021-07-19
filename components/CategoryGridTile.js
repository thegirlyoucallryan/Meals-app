import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Platform, Touchable, TouchableNativeFeedback } from 'react-native';
import { HiddenItem } from 'react-navigation-header-buttons';


const CategoryGridTile = props => {

    let TouchableCmp = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >=21 ){
        TouchableCmp = TouchableNativeFeedback
    }
return( 
    <View style={styles.gridItem}>
    <TouchableCmp style={{flex: 1}}
   
    onPress={props.onSelect}>
<View style={{...styles.container,...{textColor: 'white', backgroundColor: props.color}}}>
   <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
   </View>
   </TouchableCmp>
   </View>
)
}

const styles = StyleSheet.create({
    gridItem:{
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
       
        overflow: 'hidden',
        elevation: 9,
       

    },
    container:{
        flex: 1,
        borderRadius: 10,
        
        padding: 12,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        

    },
    title:{
        color: 'white',
        fontSize: 19,
        textAlign: 'right'
    }
})

export default CategoryGridTile;

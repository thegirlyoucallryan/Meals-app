

import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, ImageBackground} from 'react-native';


const MealItem = props => {
    return(
        <View style={styles.mealItem }>
        <TouchableNativeFeedback onPress={props.onSelectMeal}>
            <View>
                <View style={ {...styles.mealRow,...styles.mealHeader}}>
                    <ImageBackground source={{uri: props.image}} style={styles.image}>
                        <Text numberOfLines={1}
                            style={styles.title}>{props.title}</Text>
                        </ImageBackground>

            
               

           </View >
           <View style={{...styles.mealRow,...styles.mealDetail}}>
               <Text>{props.duration}m</Text>
               <Text>{props.complexity.toUpperCase()}</Text>
               <Text>{props.affordability.toUpperCase()}</Text>
           </View>
           </View>
           </TouchableNativeFeedback>
           </View>


    )
}

const styles = StyleSheet.create ({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: 'salmon',


    },

    mealRow:{
        flexDirection: 'row',
        
     
    },

    mealHeader:{
        height: '85%',


    },

    mealDetail:{
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        fontSize: 22,
       
       

    },
    image:{
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
    },

    title:{
        fontSize: 28,
        color: 'white',
        backgroundColor: 'rgba(185,25,0,0.8)',
        paddingVertical: 5,
        paddingHorizontal: 8,
        textAlign: 'center'
    }

})

export default MealItem;
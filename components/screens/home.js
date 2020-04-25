import React, {useContext, useEffect} from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {Map, RestuarantListItem, RestaurantBar} from '../common/index'
import {Context} from '../../context/store';
const  Home =()=>{
    const [state, dispatch] = useContext(Context);
    useEffect(()=>{
        // console.log(state.restaurants[0].title)
    })
    return (
        <SafeAreaView style={styles.container}>
            <Map state={state}/>
            <RestaurantBar restaurants={state.restaurants}/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		justifyContent: 'flex-end',
		alignItems: 'center',
		flex:5,
    },
    title:{
        fontSize:25,
        marginLeft:15
    }
})

export default Home
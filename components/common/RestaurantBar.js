import React, {useState, useEffect} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    SafeAreaView
} from 'react-native';
import {Card, CardItem, Left, Body, Right} from 'native-base'
import RestaurantListItem from './RestaurantListItem'

function RestuarantBar (props){

  return (
    <SafeAreaView style={styles.container} >
        <Text style={styles.topTitle}>Near By Restaurants</Text>
        <FlatList
            horizontal
            style={{marginRight:10, marginLeft:10, borderRadius:10, backgroundColor:'red', height:100, width: 300}}
            data = {props.restaurants}
            style={{marginRight:10, marginLeft:10, borderRadius:10,}}
            renderItem = {(restaurant, i)=>
                <RestaurantListItem
                  title={restaurant.item.title}
                  posted={restaurant.item.posted} 
                  image={restaurant.item.image} 
                  type={restaurant.item.type}
                  distance={restaurant.item.distance}
                  data= {restaurant.item}
                />
            }
            initialNumToRender = {10}
            keyExtractor={restaurant => restaurant.id}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
  },
  title:{
    fontWeight:'bold',
    fontSize:15
  },
  topTitle:{
    fontSize:25,
    fontWeight:'bold'.restaurant,
    marginLeft:15,
  }
})

export default RestuarantBar
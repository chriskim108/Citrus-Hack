import React, {useContext, useEffect} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    SafeAreaView
} from 'react-native';
import RestaurantListItem from './RestaurantListItem'
import { Actions } from 'react-native-router-flux';
import {Context} from '../../context/store'

function RestuarantBar (props){
  const [state, dispatch] = useContext(Context);
  function onPressRestaurant (item){
    dispatch({type: 'SET_RESTAURANT_PROFILE', payload: item});
    Actions.restaurantProfile();
  }

  return (
    <SafeAreaView style={styles.container} >
        <Text style={styles.topTitle}>Nearby Restaurants</Text>
        <FlatList
            horizontal
            style={{marginRight:10, marginLeft:10, borderRadius:10, backgroundColor:'red', height:100, width: 300}}
            data = {props.restaurants}
            style={{marginRight:10, marginLeft:10, borderRadius:10,}}
            renderItem = {(restaurant)=> {
                return(
                <TouchableOpacity style={{flex:1}} onPress={()=>onPressRestaurant(restaurant.item)}>
                  <RestaurantListItem
                    title={restaurant.item.title}
                    posted={restaurant.item.posted} 
                    image={restaurant.item.image} 
                    type={restaurant.item.type}
                    distance={restaurant.item.distance}
                    data= {restaurant.item}
                  />
                </TouchableOpacity>
                )}
            }
            initialNumToRender = {10}
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
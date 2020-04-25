import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import {Card, CardItem, Left, Body, Right} from 'native-base'
import { Actions } from 'react-native-router-flux';

function RestaurantListItem (props){

  return (
    <TouchableOpacity style={{flex:1, }} onPress={()=>Actions.restaurantProfile()}>
      <Card style={styles.container}>
        <CardItem>
          <Text style={styles.title}>{props.title}</Text>
        </CardItem>
        <CardItem>
          <Image style={styles.imageSize} source={props.image}/>
        </CardItem>
        <CardItem>
          <Body style={styles.bodyStyle}>
            <Text>{props.type}</Text>
            <Text>{props.distance}</Text>
            <Text>{props.posted}</Text>
          </Body>
        </CardItem>
        <CardItem></CardItem>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:{
    width:300,
    // marginTop:'2%',
    // borderRadius:5
  },
  imageSize:{
    width:"100%",
    height:150
  },
  bodyStyle:{
    flex:1,
    // alignItems:'center',
    // justifyContent:"space-around"
  },
  title:{
    fontWeight:'bold',
    fontSize:15
  }
})

export default RestaurantListItem
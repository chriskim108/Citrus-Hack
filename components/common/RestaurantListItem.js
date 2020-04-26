import React from 'react'
import {
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import {Card, CardItem, Body} from 'native-base'

function RestaurantListItem (props){
  return (
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
  );
}

const styles = StyleSheet.create({
  container:{
    width:300,
  },
  imageSize:{
    width:"100%",
    height:150
  },
  bodyStyle:{
    flex:1,
  },
  title:{
    fontWeight:'bold',
    fontSize:20
  }
})

export default RestaurantListItem
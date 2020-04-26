import React, {useContext, useEffect} from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Image} from 'react-native';
import {Card, CardItem, Left, Body, Right, Button} from 'native-base'
import { Actions } from 'react-native-router-flux';
import {Context} from '../../context/store'
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {BottomNavBar}  from '../common/index';

function ShoppingCart (){
    const [state, dispatch] = useContext(Context);
    return (
        <View style={{flex:1}}>
        <ScrollView>
            <Text style={styles.title}>Checkout</Text>
            {state.shoppingCart.items && state.shoppingCart.items.map((food)=>{
                return(
                    <Card style={styles.cardContainer}>
                        <CardItem>
                            <Left style={{flex:1}}><Image style={styles.imageStyles} source={food.image}/></Left>
                            <Body style={{flex:2}}>
                                <Text style={styles.foodName}>{food.name}</Text>
                                <CardItem style={{flexDirection:'row', alignSelf:'center'}}>
                                    <TouchableOpacity><AntDesignIcon name="minuscircleo" size={25} color={"#3EBC21"}/></TouchableOpacity>
                                        <Text style={{fontSize:20}}>  {food.quantity + " Orders "} </Text>
                                    <TouchableOpacity><AntDesignIcon name="pluscircleo" size={25} color={"#3EBC21"}/></TouchableOpacity>
                                </CardItem>
                            </Body>
                            <Right style={{flex:1}}>
                                <Text style={styles.priceText}>{"$" + food.quantity*food.price}</Text>
                            </Right>
                        </CardItem>
                    </Card>
                )
            })}
            <Text style={styles.totalPriceText}>{"Total:  $" + state.shoppingCart.totalPrice}</Text>
            <Button style={styles.button} onPress={()=>Actions.confirmation()}><Text style={styles.submitText}>Pay Now</Text></Button>
        </ScrollView>
        <BottomNavBar state={state}/>
        </View>
    )
}
const styles = StyleSheet.create({
    cardContainer: {
        width:'90%',
        height:100,
        alignSelf:'center',
        borderRadius:10
    },
    title:{
        fontSize:35,
        marginTop:'10%',
        textAlign:'center',
        marginBottom:'10%',
        fontWeight:'bold'
    },
    imageStyles:{
        width:69,
        height:70,
        alignSelf:'flex-start',
        borderRadius:10
    },
    foodName:{
        alignSelf:'center',
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center',
    },
    priceText:{
        fontSize:18,
        fontWeight:'bold'
    },
    button:{
        backgroundColor:"#3EBC21",
        width:'85%',
        height:45,
        borderRadius:5,
        alignSelf:'center',
        marginTop:'10%'
    },
    submitText:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        marginLeft:'auto',
        marginRight:'auto',
    },
    totalPriceText:{
        fontSize:25,
        textAlign:'center',
        marginTop:'10%',
        fontWeight:'bold'
    }
})

export default ShoppingCart
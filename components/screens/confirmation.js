import React, {useContext, useEffect} from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {Card, CardItem, Left, Right, Body, Button} from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo'; 
import IonIcon from 'react-native-vector-icons/Ionicons';
const Confirmation =()=>{
    return (
        <View style={{flex:1}}>
            <AntDesignIcon style={styles.icon} name="checkcircle" size={100} color={"#3EBC21"}/>
            <Text style={styles.textTitle}>Order Complete</Text>
            <Card style={styles.card}>
                <Left style={{flex:1, alignSelf:'flex-start', flexDirection:'row'}}>
                    <EntypoIcon style={styles.shoppingIcon} name="shopping-bag" size={30} color={"#3EBC21"}/>
                    <Text style={styles.infoTexts}>Order Number</Text>
                </Left>
                <Body style={{flex:1}}></Body>
                <Right style={{flex:5, alignSelf:'flex-end'}}><Text style={styles.descriptionTexts}>1205713502</Text></Right>
            </Card>
            <Card style={styles.card}>
                <Left style={{flex:1, alignSelf:'flex-start', flexDirection:'row'}}>
                    <IonIcon style={styles.shoppingIcon} name="md-time" size={30} color={"#3EBC21"}/>
                    <Text style={styles.infoTexts}>Pickup Time</Text>
                </Left>
                <Body style={{flex:1}}></Body>
                <Right style={{flex:5, alignSelf:'flex-end'}}><Text style={styles.descriptionTexts}>11:30Am</Text></Right>
            </Card>
            <Card style={styles.card}>
                <Left style={{flex:1, alignSelf:'flex-start', flexDirection:'row'}}>
                    <EntypoIcon style={styles.shoppingIcon} name="location-pin" size={30} color={"#3EBC21"}/>
                    <Text style={styles.infoTexts}>Address</Text>
                </Left>
                <Body style={{flex:1}}></Body>
                <Right style={{flex:10, alignSelf:'flex-end'}}><Text style={styles.descriptionTexts}>133-42 37th Ave, {'\n'}Flushing, NY 11354</Text></Right>
            </Card>
            <Button style={styles.button} onPress={()=>Actions.home()}><Text style={styles.submitText}>CONTINUE</Text></Button>
        </View>
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
    },
    textTitle:{
        fontSize:35,
        alignSelf:'center',
        marginTop:'10%',
        color: "#3EBC21",
        fontWeight:'bold',
        marginBottom:20
    },
    button:{
        backgroundColor:"#3EBC21",
        width:'60%',
        height:45,
        borderRadius:10,
        alignSelf:'center',
        marginTop:'20%'
    },
    submitText:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        marginLeft:'auto',
        marginRight:'auto',
    },
    icon:{
        alignSelf:'center',
        marginTop:'20%'
    },
    card:{
        width:'90%',
        alignSelf:'center',
        height:50
    },
    shoppingIcon:{
        alignSelf:'flex-start',
        marginTop:8,
        marginLeft:5
    },
    infoTexts:{
        marginTop:14,
        marginLeft:10
    },
    descriptionTexts:{
        alignSelf:'flex-end',
        textAlign:'right',
        marginRight:10
    }
})

export default Confirmation
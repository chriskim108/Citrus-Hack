import React, {useContext, useEffect} from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button} from 'native-base'
const  Landing =()=>{
    return (
        <View style={{flex:1}}>
            <Text style={styles.textTitle}>PlayFul</Text>
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
        marginTop:'60%',
        color: "#3EBC21",
        fontWeight:'bold'
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
})

export default Landing
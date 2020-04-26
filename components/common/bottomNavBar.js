import React, {useContext, useEffect} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';       
import { Actions } from 'react-native-router-flux';
import Context from '../../context/store';
import {Footer, FooterTab, Button} from 'native-base';  

function BottomNavBar (props){
    return (
        // <Store>
            <Footer style={[styles.footer, props.customStyle]}>
                <FooterTab style={styles.footerStyles}>
                    <Button vertical onPress={()=>Actions.home()}>
                    <Icon name="ios-restaurant" size={30} color={"#3EBC21"}/>
                    </Button>
                    <Button vertical onPress={()=>Actions.profile()}>
                    <Icon name="md-person" size={30} color={"#3EBC21"} />
                    </Button>
                    <Button vertical onPress={()=>Actions.shoppingCart()}>
                    <Icon name="ios-cart" size={30} color={"#3EBC21"} />
                    {props.state.shoppingCart.items ? <View style={styles.numberBubble}>
                        <Text style={styles.count}>{props.state.shoppingCart.count? props.state.shoppingCart.count :0}</Text>
                    </View>:null}
                    </Button>
                </FooterTab>
            </Footer>
        // </Store>
      );

}
const styles = StyleSheet.create({
    footer:{
        width:'100%',
    },
    footerStyles:{
      backgroundColor:'white'
    },
    numberBubble:{
      height:25,
      width:25,
      borderRadius:35,
      backgroundColor:'#5D57FF',
      position:'absolute',
      bottom:20,
      right:38
    },
    count:{
      color:'white',
      textAlign:'center',
      marginBottom:'auto',
      marginTop:'auto',
      fontWeight:'bold'
    }
});

export default BottomNavBar
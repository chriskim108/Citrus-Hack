/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import {Home, ShoppingCart, Profile, RestaurantProfile} from './components/screens/index';
import TabIcon from './components/common/TabIcon';
import Store from './context/store';
import { Container, Header, Content, Footer, FooterTab, Button} from 'native-base';  
import Icon from 'react-native-vector-icons/Ionicons';       
import { Actions } from 'react-native-router-flux';
class App extends Component {

  render(){
    return (
      <Store>
      <Router>
        <View>
          <Scene key="root" hideNavBar>
            <Scene key='home' component={Home} initial/>
            <Scene key='shoppingCart' component={ShoppingCart}/>
            <Scene key='profile' component={Profile}/>
            <Scene key='restaurantProfile' component={RestaurantProfile}/>
          </Scene>

          {/* <Scene key="root" hideNavBar tabs>
            <Scene 
              component={Home}
              hideNavBar
              title="Home"
            />
            <Scene 
              component={ShoppingCart}
              hideNavBar
              title="Shopping Cart"
            />
            <Scene 
              component={Profile}
              hideNavBar
              title="Profile"
            />
          </Scene> */}
        </View>
      </Router>
      <Footer>
          <FooterTab style={styles.footerStyles}>
              <Button vertical onPress={()=>Actions.home()}>
                <Icon name="ios-restaurant" size={30} color={"#3EBC21"}/>
              </Button>
              <Button vertical onPress={()=>Actions.profile()}>
                <Icon name="md-person" size={30} color={"#3EBC21"} />
              </Button>
              <Button vertical onPress={()=>Actions.shoppingCart()}>
                <Icon name="ios-cart" size={30} color={"#3EBC21"} />
              </Button>
            </FooterTab>
          </Footer>
      </Store>
    );
  }
}

const styles = StyleSheet.create({
  footerStyles:{
    backgroundColor:'white'
  }
});

export default App;

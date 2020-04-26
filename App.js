/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {View} from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import {Home, ShoppingCart, Profile, RestaurantProfile, Landing, Confirmation} from './components/screens/index';
import {BottomNavBar} from './components/common/index';
import Store from './context/store';


class App extends React.Component{
  render(){
    return (
      <Store>
        <Router>
            <Scene key="root" hideNavBar>
              <Scene key='landing' component={Landing} initial/>
              <Scene key='home' component={Home}/>
              <Scene key='shoppingCart' component={ShoppingCart}/>
              <Scene key='profile' component={Profile}/>
              <Scene key='restaurantProfile' component={RestaurantProfile}/>
              <Scene key='confirmation' component={Confirmation}/>
            </Scene>
        </Router>    
      </Store>
    )
  }
}

export default App;

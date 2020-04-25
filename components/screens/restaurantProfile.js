import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ImageBackground
} from 'react-native';
import {Card, CardItem, Left, Body, Right} from 'native-base'
import { ScrollView } from 'react-native-gesture-handler';

function RestuarantProfile(props){
  return (
    <SafeAreaView>
      <View style={styles.topView}>
        {/* <ImageBackground source={}>

        </ImageBackground> */}
      </View>
      <ScrollView>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    width:'95%',
    flex:1,
    alignSelf:'center',
    marginTop:'2%',
    borderRadius:5
  },
  mapContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      height:'70%'
  },
  imageSize:{
    flex:1,
    height:100,
  },
  bodyStyle:{
    flex:1,
    alignItems:'center',
    justifyContent:"space-around"
  },
  title:{
    fontWeight:'bold',
    fontSize:15
  },
  topView:{
    height:'20%',
    width:'100%',
    backgroundColor:'grey'
  },
  backgroundImageSize:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
})

export default RestuarantProfile
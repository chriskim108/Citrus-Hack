import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { PermissionsAndroid } from 'react-native';

class Map extends React.Component {
  constructor(props){
    super(props)
    this.state={
      marginBottom:1,
      initialRegion: [],
			restaurantPins: []
    }
  }
  componentDidMount(){
    this.setState({ marginBottom: 0 }) 
  }
  // onMapReady = () => {
    
  //   this.setState({ marginBottom: 0 }) 
  // } 
    render() {
    return (
      <SafeAreaView style={styles.container}>
        <MapView
          // onMapReady={()=>this.onMapReady()}
          style={styles.mapContainer, {        position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          height:'90%',marginBottom:this.state.marginBottom}}
          region={{
            latitude: 40.76089549859875,
            longitude: -73.83078768706343,
            latitudeDelta: 0.01,
						longitudeDelta: 0.01
          }}
          showsUserLocation={true}
          followsUserLocation={true}
          showsMyLocationButton={true}
					showsCompass={false}
          loadingEnabled={true}
        >
          {<Marker coordinate={{
              latitude: 40.76089549859875,
              longitude: -73.83078768706343
            }}>
            <View style={styles.currentUser}></View></Marker>}
          {this.props.state.restaurants.map(marker => <Marker
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude
            }}
              // title={marker.title}
            >
            </Marker>
    )}
        </MapView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
    container:{
      height:'100%',
      width:'100%',
      flex:4
    },
    mapContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height:700
    },
    currentUser:{
      height:20,
      width:20,
      color:'blue',
      backgroundColor:'#3EBC21',
      borderRadius:20,
      borderColor:'lightblue',
      borderWidth:3
    }
})

export default Map
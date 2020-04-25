import React from 'react';
import {
    View,
    Text
} from 'react-native';

function  CustomMarker (){
      return (
        <View>
          <Text>{this.props.title}</Text>
        </View>
      );

}

export default CustomMarker
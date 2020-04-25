import React from 'react'
import {
    View,
    Text
} from 'react-native';

class TabIcon extends React.Component {
    render() {
      /** some styling **/
      return (
        <View>
          <Text>{this.props.title}</Text>
        </View>
      );
    }
}

export default TabIcon
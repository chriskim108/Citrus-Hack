import React from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {Card, CardItem, Left, Body, Right, Button} from 'native-base'
class Profile extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text>This is profile</Text>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
})

export default Profile
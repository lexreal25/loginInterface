import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Contacts = () => {
    return(
        <View style={styles.container}>
            <Text>Welcome to contact page</Text>
        </View>
    )
}


export default function Contact() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Contacts' component={Contacts} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


const Stack = createStackNavigator()


const styles = StyleSheet.create({
    container: {
        flex:1
    }
})
import React from 'react'
import { Button, View, Text } from 'react-native';


function HomeScreen({navigation}){
    return(
        <View>
            <Text>Home Screen</Text>
            <Button
                title='to calendar'
                onPress={() => navigation.navigate('Calendar')}
            />
        </View>
    )
}


export default HomeScreen
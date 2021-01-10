import React from 'react'
import { Button, View, Text } from 'react-native';


function HomeScreen({navigation}){
    return(
        <>
        <View
        style={{
            padding: 40,
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#3eadcf',

            
        }}
        >
            <View
            style={{
                flexDirection: 'row',
            }}
            >
                <Text
                    style={{
                        fontSize: 25,
                        fontWeight: "bold",
                        color: 'white'
                    }}
                >Tide Charts</Text>
            </View>

        </View>
        <View
        style={{
            flex:1,
            
        }}>
            <Button

                title='to calendar'
                onPress={() => navigation.navigate('Calendar')}
            />
    </View>
    </>
    )
}


// background-color: #abe9cd;
// background-image: linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);


export default HomeScreen
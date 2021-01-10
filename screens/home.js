import React from 'react'
import { Button, View, Text } from 'react-native';


function HomeScreen({navigation}){
    return(
        <>
        <View
        style={{
            padding: 40,
            
            alignItems: 'center',
            backgroundColor: '#3eadcf'
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
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', padding: 40, flex: 0.5, backgroundColor:'red'}}>
            <View><Text>item1</Text></View>
            <View><Text>item2</Text></View>
            <View><Text>item3</Text></View>
        </View>

        <View style={{flex:2}}><Text>Graph</Text></View>
        <View style={{flex:1, backgroundColor:'orange'}}><Text>Tide Info</Text></View>
    </>
    )
}


// background-color: #abe9cd;
// background-image: linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);


export default HomeScreen
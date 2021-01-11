import React from 'react'
import { Button, View, Text} from 'react-native';
import {Icon} from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';


function HomeScreen({navigation}){
    return(
        <View style={{flex:1,justifyContent:'center',}}>
        <View
        style={{
            padding: 40,
            justifyContent:'center',
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
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around',paddingBottom: 20, flex: 0.5, backgroundColor:'#3393b0'}}>
            <View style={{alignItems:'center'}}><Ionicons style={{padding:10}} name='arrow-down-circle-outline' size={50} color={'white'}/><Text style={{color:'white'}}>90% Waning</Text></View>
            <View style={{justifyContent:'center', alignItems:'center'}}><Text>CALRSBAD</Text><Text>TODAY</Text><Text>JANUARy 09, 2020</Text></View>
            <View style={{alignItems:'center' }}><Ionicons name='sunny-outline' size={50} color={'white'}/><Text style={{color:'white'}}>72°F | 64°F</Text></View>
        </View>

        <View style={{flex:2}}><Text>Graph</Text></View>
        <View style={{flex:1, backgroundColor:'orange'}}><Text>Tide Info</Text></View>
    </View>
    )
}


// background-color: #abe9cd;
// background-image: linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);


export default HomeScreen
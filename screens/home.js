import React from 'react'
import { Button, View, Text, StyleSheet} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';


const arr1 = ['hello', 'world']

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
            <View style={{alignItems:'center'}}><Ionicons style={{}} name='arrow-down-circle-outline' size={50} color={'white'}/><Text style={{color:'white', paddingTop: 10}}>90% Waning</Text></View>
            <View style={{ alignItems:'center'}}><Text style={styles.textbig}>CALRSBAD</Text><Text style={styles.textmed}>TODAY</Text><Text style={styles.textmed}>JANUARY 09, 2020</Text></View>
            <View style={{alignItems:'center' }}><Ionicons name='sunny-outline' size={50} color={'white'}/><Text style={{color:'white', paddingTop: 10}}>72°F | 64°F</Text></View>
        </View>

        <View style={{flex:2}}>{arr1.map(item => {
            return <Text>{item}</Text>
        })}</View>
        <View style={{flex:1, backgroundColor:'orange'}}><Text>Tide Info</Text></View>
    </View>
    )
}


// background-color: #abe9cd;
// background-image: linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);

 const styles = StyleSheet.create({
    textbig: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    textmed: {
        color: 'white',
        padding: 10,

    }

})


export default HomeScreen
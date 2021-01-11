import React from 'react'
import { Button, View, Text, StyleSheet} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {LineChart} from 'react-native-chart-kit'


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

        <View style={{backgroundColor:'#40b9de'}}>
            <LineChart 
                data={{
                    labels:['day1', 'day2', 'day3', 'day4'],
                    datasets:[
                        {
                            data:[
                                6.24,
                                3,
                                4,5,
                                -0.22
                            ]
                        }
                    ]
                }}

                width={500} // from react-native
                height={250}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: "#e26a00",
                  backgroundGradientFrom: "#fb8c00",
                  backgroundGradientTo: "#ffa726",
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 6
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                  }
                }}
                bezier
                style={{
                  marginVertical: 2,
                  borderRadius: 8
                }}
            />
        </View>
{/* 
        <View style={{flex:2}}>{arr1.map(item => {
            return <Text>{item}</Text>
        })}</View> */}
        <View style={{flex:1, backgroundColor:'#40b9de'}}><Text>Tide Info</Text></View>
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
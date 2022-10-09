import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image
} from 'react-native'
import Navbar from './Navbar';


const { height, width } = Dimensions.get("window");


function HalamanCategory({ navigation }) {
    return (
        <View style={{ backgroundColor: "black", flex: 1 }}>

            <View>
                <Navbar navigation={navigation} />
            </View>



            <View>
                <Text>
                    Action
                </Text>
            </View>


            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={{ color: "red", fontSize: 50 }}>
                    Click mamank
                </Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    img: {
        width: width / 4,
        height: height / 5,

    },


})


export default HalamanCategory
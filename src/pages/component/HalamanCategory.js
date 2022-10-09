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
    const handleInput = () => {

        navigation.navigate('Description_film', {
        })

    }

    return (
        <View style={{ backgroundColor: "black", flex: 1 }}>

            <View>
                <Navbar navigation={navigation} />
            </View>

            <View>
                Action
            </View>

            <View >
            <Image style={styles.img} source={require('../img/Frame_7.png')} />  
            </View>

            {/* <View style={styles.header}>
                <Text style={styles.logo}>NETFLOX</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Halaman1')}
                >
                    <Text style={styles.category}>CATEGORY</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={{ color: "red", fontSize: 50 }}>
                    Click mamank
                </Text>
            </TouchableOpacity> */}
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
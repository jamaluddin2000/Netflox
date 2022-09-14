import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native'

import Header from './Header'

function Halaman1({ navigation, route }) {

    return (
        <View>

            <Header />
            <Text style={{ color: "black", fontSize: 30 }}>
                ini adalah = {route.params.title}
            </Text>

            <Text style={{ color: "black", fontSize: 30 }}>
                ini adalah = {route.params.tahun}
            </Text>

            <Text style={{ color: "black", fontSize: 30 }}>
                ini adalah = {route.params.durasi}
            </Text>
            <View>
                <Image style={styles.img} resizeMode={'stretch'} source={{ uri: route.params.image }} />
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
        width: 100,
        height: 100,

    }

})


export default Halaman1

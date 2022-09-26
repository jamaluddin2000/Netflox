import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native'

<<<<<<< HEAD
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

=======

const {height, width} = Dimensions.get("window");


function Halaman1({navigation }) {

    return (
        <View>
>>>>>>> 57e8a87e5346fe6c382c551d058afa490f5cb01a

            <View style={styles.header}>
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
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    logo: {
        color: "red",
        fontSize: 30,
        fontWeight: "bold",
        height: height/20,
        marginVertical:15
    },
    category: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        height: height/20,
        marginVertical:20
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "black",
        paddingHorizontal: 20

    }

})


export default Halaman1

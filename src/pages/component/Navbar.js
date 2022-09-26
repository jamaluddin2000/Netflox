import React from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Dimensions
} from 'react-native'


const { height, width } = Dimensions.get("window");



function Navbar({ navigation }) {

    const handleCategory = () => {

        navigation.navigate('Category')

    }

    const handleHome = () => {

        navigation.navigate('Home')

    }

    return (
        <View style={styles.header}>

            <TouchableOpacity
                onPress={handleHome}
            >
                <Text style={styles.logo}>NETFLOX</Text>
            </TouchableOpacity>

            

            <TouchableOpacity
                onPress={handleCategory}
            >
                <Text style={styles.category}>CATEGORY</Text>
            </TouchableOpacity>

        </View>


    )
}

const styles = StyleSheet.create({
    logo: {
        color: "red",
        fontSize: 30,
        fontWeight: "bold",
        height: height / 20,
        marginVertical: 15
    },
    category: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        height: height / 20,
        marginVertical: 20
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "black",
        paddingHorizontal: 20

    }

})

export default Navbar

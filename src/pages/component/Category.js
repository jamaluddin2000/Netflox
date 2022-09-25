import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native'

import Header from './Navbar'

function Category({ navigation, route }) {

    return (
        <ScrollView style={{backgroundColor: "black", flex: 1}} >
            <View>
                <Header />
            </View>

            <TouchableOpacity style={{color: "white", backgroundColor: "red", marginHorizontal: 40, marginVertical: 15, padding: 30, borderRadius: 10,}}>
                <Text >
                    Action
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{color: "white", backgroundColor: "red", marginHorizontal: 40, marginVertical: 15, padding: 30, borderRadius: 10}}>
                <Text >
                    Drama
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{color: "white", backgroundColor: "red", marginHorizontal: 40, marginVertical: 15, padding: 30, borderRadius: 10}}>
                <Text >
                    Comedy
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{color: "white", backgroundColor: "red", marginHorizontal: 40, marginVertical: 15, padding: 30, borderRadius: 10}}>
                <Text >
                    Thiler
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{color: "white", backgroundColor: "red", marginHorizontal: 40, marginVertical: 15, padding: 30, borderRadius: 10}}>
                <Text >
                    Biografy
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{color: "white", backgroundColor: "red", marginHorizontal: 40, marginVertical: 15, padding: 30, borderRadius: 10}}>
                <Text >
                    Action
                </Text>
            </TouchableOpacity>





           {/* <Header />
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
            </View> */}



            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={{ color: "red", fontSize: 50 }}>
                    Click mamank
                </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100,

    }

})


export default Category

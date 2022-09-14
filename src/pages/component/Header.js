import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'

function Header() {
    return (
        <View >
            <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'black' }}>
                <Image
                    style={styles.stretch}
                    source={require('../img/Logo_Netfox.png')} />

                <Text style={{ color: "white", fontSize: 20, margin: 30 }}>
                    mantap
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    stretch: {
        width: 100,
        height: 100
    },

})

export default Header

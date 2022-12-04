import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const Apploader = ({
    containerStyle, loaderStyle, color = "white"

}) => {
    return (
        <View
            style={containerStyle}
        >
            <ActivityIndicator
                style={loaderStyle}
                color={color}
            />
        </View>
    )
}

export default Apploader
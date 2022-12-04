import { View, Text, TouchableOpacity, Animated } from 'react-native'
import React, { useRef } from 'react'
import { colors, sizes } from '../constants/theme'

const CustomSwitch = ({ onPress, isSelected, }) => {

    const radioAnimated = useRef(new Animated.Value(5)).current


    const CircleColorAnimated = radioAnimated.interpolate({
        inputRange: [5, 27],
        outputRange: ["#DDDDDD", colors.secondary]
    })

    // handler

    React.useEffect(() => {

        if (isSelected) {
            Animated.timing(radioAnimated, {
                toValue: 27,
                duration: 300,
                useNativeDriver: false
            }).start()
        }
        else {
            Animated.timing(radioAnimated, {
                toValue: 5,
                duration: 300,
                useNativeDriver: false
            }).start()
        }

    }, [isSelected])



    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <Animated.View
                style={{
                    height: 25,
                    width: 55,
                    borderRadius: sizes.padding,
                    backgroundColor: CircleColorAnimated,
                    justifyContent: 'center',
                }}
            >
                <Animated.View
                    style={{
                        position: 'absolute',
                        left: radioAnimated,
                        height: 20,
                        width: 20,
                        borderRadius: sizes.padding,
                        backgroundColor: colors.white
                    }}
                />

            </Animated.View>

        </TouchableOpacity>
    )
}

export default CustomSwitch
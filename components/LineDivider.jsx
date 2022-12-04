import { View, Text } from 'react-native'
import React from 'react'
import { colors } from '../constants/theme'

const LineDivider = ({ containerStyle }) => {
    return (
        <View
            style={{
                height: 2,
                backgroundColor: colors.gray2,
                width: '100%',
                ...containerStyle
            }}
        />
    )
}

export default LineDivider
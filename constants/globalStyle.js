import { StyleSheet } from 'react-native'
import { colors, fonts } from './theme'

const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    heading: {
        color: colors.black,
        ...fonts.h1,
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default globalStyle
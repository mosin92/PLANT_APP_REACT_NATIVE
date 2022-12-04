import { TouchableOpacity, Image } from 'react-native'

export default function IconButton({
    containerStyle,
    icon,
    onPress,
    iconStyle
}) {
    return (
        <TouchableOpacity
            style={{
                ...containerStyle
            }}
            onPress={onPress}
        >
            <Image
                resizeMode='contain'
                style={{
                    width: 30,
                    height: 30,
                    ...iconStyle
                }}
                source={icon}
            />
        </TouchableOpacity>
    )
}
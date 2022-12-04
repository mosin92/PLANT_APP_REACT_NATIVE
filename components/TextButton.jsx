import { LinearGradient } from 'expo-linear-gradient'
import { View, Text, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../constants/theme'
import Apploader from './Apploader'

const TextButton = ({ label, gradient = false, disabled,
    labelStyle, buttonContainerStyle, onPress,
    label2 = "", label2Style, loading = false,
}) => {

    if (gradient) {
        return (
            <TouchableOpacity
                disabled={disabled}
                style={buttonContainerStyle}
                onPress={onPress}
            >
                <LinearGradient
                    style={{
                        width: '100%',
                        ...buttonContainerStyle
                    }}
                    colors={[colors.primary, colors.secondary]}
                    start={{
                        x: 0, y: 0
                    }}
                    end={{
                        x: 1, y: 1
                    }}
                    locations={[0.1, 0.9]}
                >

                    {/* loader */}

                    {
                        !loading ?
                            <>
                                <Text
                                    style={{
                                        color: colors.white,
                                        ...fonts.body,
                                        ...labelStyle
                                    }}
                                >{label}
                                </Text>
                            </>
                            :
                            <Apploader />
                    }


                    {
                        label2 != "" &&
                        <Text
                            style={{
                                color: colors.white,
                                ...fonts.h3,
                                textAlign: 'right',
                                ...label2Style
                            }}
                        >
                            {label2}
                        </Text>
                    }
                </LinearGradient>
            </TouchableOpacity>
        )
    }

    return (
        <TouchableOpacity
            disabled={disabled}
            style={buttonContainerStyle}
            onPress={onPress}
        >
            <Text
                style={{
                    color: colors.white,
                    ...fonts.body,
                    ...labelStyle
                }}
            >{label}
            </Text>

            {
                label2 != "" &&
                <Text
                    style={{
                        color: colors.white,
                        ...fonts.h3,
                        textAlign: 'right',
                        ...label2Style
                    }}
                >
                    {label2}
                </Text>
            }
        </TouchableOpacity>
    )
}

export default TextButton
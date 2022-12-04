import { View, Text } from 'react-native'
import React from 'react'
import { colors, sizes, fonts } from '../constants/theme'
import { FormInput, IconButton, TextButton } from '../components'
import { icons } from '../constants'
import utils from '../validation'

const Forgot_Pswd = ({ navigation }) => {

    const [forgot_pswd, setForgot_pswd] = React.useState('')
    const [error_forgot, seterror_forgot] = React.useState('')

    const handleSubmit = () => {
        if (forgot_pswd !== "" && error_forgot === "")
            alert("Please check your email")
    }

    // UI RENDER

    const renderHeader = () => {
        return (

            <View
                style={{
                    marginTop: sizes.padding
                }}
            >
                {/* Back Icon */}
                <IconButton
                    containerStyle={{
                        width: 25
                    }}
                    icon={icons.back_lg}
                    iconStyle={{
                        width: 25,
                        heigth: 25,
                        tintColor: colors.gray
                    }}
                    onPress={() => navigation.goBack()}
                />

                {/* Text */}
                <Text
                    style={{
                        color: colors.black,
                        ...fonts.h1,
                        fontWeight: 'bold',
                        marginTop: sizes.padding
                    }}
                >
                    Forgot

                </Text>
            </View>
        )
    }

    return (
        <View
            style={{
                backgroundColor: colors.white,
                paddingHorizontal: sizes.padding,
                flex: 1
            }}
        >
            {/* header */}

            {renderHeader()}

            {/* body */}
            <View
                style={{
                    marginTop: sizes.padding * 4,
                    alignItems: 'center',
                    flex: 1,
                }}
            >
                <FormInput
                    label={"Email"}
                    placholder={"Enter your email"}
                    errorMsg={error_forgot}
                    value={forgot_pswd}
                    onChange={(value) => {
                        utils.validateEmail(value, seterror_forgot)
                        setForgot_pswd(value)
                    }}
                    containerStyle={{
                        marginTop: sizes.padding,
                        backgroundColor: colors.white,
                        width: '100%'
                    }}
                    inputContainerStyle={{
                        paddingHorizontal: 0,
                        heigth: 20,
                        backgroundColor: null,
                        borderBottomColor: colors.gray2,
                        borderBottomWidth: 1
                    }}
                />


                <TextButton
                    label={"Forgot"}
                    onPress={() => handleSubmit()}
                    gradient
                    buttonContainerStyle={{
                        marginTop: sizes.padding,
                        height: 45,
                        borderRadius: 4,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '95%'
                    }}
                    labelStyle={{
                        fontWeight: '600',
                        ...fonts.h3
                    }}
                />

            </View>

        </View>
    )
}

export default Forgot_Pswd
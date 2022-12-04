import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { colors, fonts, sizes } from '../constants/theme'
import { globalStyle, icons, Route, showAlertbox } from '../constants'
import { FormInput, IconButton, TextButton } from '../components'
import utils from '../validation'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Signup = ({ navigation }) => {

    // states
    const [email, setemail] = useState("")
    const [password, setpassword] = useState('')
    const [showpassword, setshowpassword] = useState(false)
    const [name, setname] = useState('')
    // error states

    const [emailError, setemailError] = useState("")
    const [passwordError, setpasswordError] = useState("")
    const [nameerror, setnameerror] = useState('')

    // loading
    const [loading, setloading] = useState(false)


    // helper

    const isEnablebtn = () => {
        return email !== "" && password !== "" && name !== "" && emailError == "" && passwordError == ""
    }


    const handleSubmit = () => {
        setloading(true)
        setTimeout(() => {
            setloading(false)
            showAlertbox("", "Register Successfully", () => {
                navigation.navigate(Route.private.home)
            })
        }, 3000)
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
                    Signup

                </Text>
            </View>
        )
    }

    const renderBody = () => {
        return (

            <View
                style={{
                    marginTop: sizes.padding,
                    justifyContent: 'center'
                }}
            >
                {/* Email Input */}

                <FormInput
                    label={"Email"}
                    value={email}
                    errorMsg={emailError}
                    onChange={(value) => {
                        utils.validateEmail(value, setemailError)
                        setemail(value)
                    }}
                    containerStyle={{
                        marginTop: sizes.padding,
                        backgroundColor: colors.white
                    }}
                    inputContainerStyle={{
                        paddingHorizontal: 0,
                        heigth: 20,
                        backgroundColor: null,
                        borderBottomColor: emailError ? 'red' : colors.gray2,
                        borderBottomWidth: 1
                    }}

                />

                {/* User Name Input */}

                <FormInput
                    label={"Username"}
                    value={name}
                    errorMsg={nameerror}
                    onChange={(value) => {
                        utils.validateUsername(value, setnameerror)
                        setname(value)
                    }}
                    containerStyle={{
                        marginTop: sizes.padding,
                        backgroundColor: colors.white
                    }}
                    inputContainerStyle={{
                        paddingHorizontal: 0,
                        heigth: 20,
                        backgroundColor: null,
                        borderBottomColor: colors.gray2,
                        borderBottomWidth: 1
                    }}
                />


                {/* Password Input */}
                <FormInput
                    label={"Password"}
                    value={password}
                    errorMsg={passwordError}
                    secureTextEntry={!showpassword}
                    onChange={(value) => {
                        utils.validatePassword(value, setpasswordError)
                        setpassword(value)
                    }}
                    containerStyle={{
                        marginTop: sizes.padding,
                        backgroundColor: colors.white
                    }}
                    inputContainerStyle={{
                        paddingHorizontal: 0,
                        heigth: 20,
                        backgroundColor: null,
                        borderBottomColor: passwordError ? 'red' : colors.gray2,
                        borderBottomWidth: 1
                    }}
                    appendComponent={
                        <IconButton
                            onPress={() => setshowpassword(prev => !prev)}
                            icon={showpassword ? icons.eye_open : icons.eye_close}
                            iconStyle={{
                                width: 20,
                                heigth: 20
                            }}
                        />
                    }
                />
            </View>
        )
    }


    const renderFooter = () => {
        return (
            <View
                style={{
                    marginTop: sizes.padding
                }}
            >

                {/* Login btn */}

                <TextButton
                    label={"signup"}
                    loading={loading}
                    disabled={isEnablebtn() ? false : true}
                    onPress={() => handleSubmit()}
                    gradient
                    buttonContainerStyle={{
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

                {/* Forgot password */}

                <TextButton
                    label={"Already have account?"}
                    buttonContainerStyle={{
                        marginTop: sizes.padding,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    labelStyle={{
                        color: colors.gray,
                        ...fonts.h3
                    }}
                />

            </View>
        )
    }

    return (
        <KeyboardAwareScrollView
            style={{
                ...globalStyle.container,
                paddingHorizontal: sizes.padding
            }}
        >
            {/* header */}
            {renderHeader()}

            {/* body */}

            {renderBody()}

            {/* Footer */}

            {renderFooter()}
        </KeyboardAwareScrollView>
    )
}

export default Signup